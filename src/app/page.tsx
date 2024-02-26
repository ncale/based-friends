import Image from "next/image";

export default function Home() {
  return (
    <div style={{ paddingTop: '40px', paddingLeft: '40px', paddingRight: '40px' }}>
      <h1 style={{ fontSize: '30px', lineHeight: '1.2' }}> 
        <span style={{ display: 'block', whiteSpace: 'nowrap', marginBottom: '-10px' }}>Onchain</span>
        <span style={{ display: 'block', whiteSpace: 'nowrap', marginBottom: '-10px' }}>Clarity</span> 
        <span style={{ display: 'block', whiteSpace: 'nowrap' }}>Co.</span>
      </h1>
      <hr style={{ border: '0.5px solid black', margin: '10 auto', width: '100%' }} />
    </div>
  );
}
