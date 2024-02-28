import { AirstackResponse } from '@/airstack.types';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const url = new URL(req.url);
    const fid = url.searchParams.get('fid');

    if (fid) {
        const data = await fetchAirstackData(Number(fid));


        return NextResponse.json(data, { status: 200 });
    }

    return NextResponse.json({error: 'No FID'})
}

async function fetchAirstackData(fid: number) {
    // Format GraphQL query
    const query = `
      {
        SocialFollowings(
          input: {filter: {identity: {_eq: "fc_fid:${fid}"}, dappName: {_eq: farcaster}}, blockchain: ALL, limit: 50}
        ) {
          Following {
            followingAddress {
              socials(input: {filter: {dappName: {_eq: farcaster}}}) {
                dappName
                profileName
                profileImageContentValue{
                  image{
                    medium
                  }
                }
                updatedAt
              }
              tokenTransfers(input: {blockchain: base, order: [{blockTimestamp: DESC}], limit: 1}) {
                blockTimestamp
              }
            }
          }
        }
      }
    `

    // Hit the Airstack GraphQL API with the above query
    const res = await fetch('https://api.airstack.xyz/gql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.AIRSTACK_API_KEY}`
        },
        body: JSON.stringify({ query })
    });

    const airstackData = await res.json() as AirstackResponse;

    const formattedData: FormattedAirstackData[] = airstackData.data.SocialFollowings.Following.map((user) => {
        return {
            username: user.followingAddress.socials[0].profileName,
            avatar: user.followingAddress.socials[0].profileImageContentValue.image?.medium,
            latestFarcasterAction: new Date(user.followingAddress.socials[0].updatedAt),
            latestBaseAction: new Date(user.followingAddress.tokenTransfers[0].blockTimestamp),
        }
    })

    return formattedData;
}

type FormattedAirstackData = {
    username: string,
    avatar: string | undefined,
    latestFarcasterAction: Date,
    latestBaseAction: Date,
}