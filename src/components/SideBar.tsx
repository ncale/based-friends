export default async function SideBar() {
	return (
    <div className="w-1/6 p-2" style={{color: '#FFF', marginTop: '20px', marginLeft: '100px'}}>
         <ul className="Search" style={{ borderBottom: '1px solid #FFF', paddingTop: '0.1rem', paddingBottom: '0.1rem' }}>
           <li className="text-lg leading-none ml-2 mb-1">
              <input type="search" placeholder="Search" />
            </li>
          </ul>

        
        <ul className="Filter" style={{ borderBottom: '1px solid #FFF', paddingTop: '0.1rem', paddingBottom: '0.1rem' }}>
          <li className="text-lg leading-none ml-2 mb-1">Following</li>
          <li className="text-lg leading-none ml-2 mb-1">Follows Me</li>
          <li className="text-lg leading-none ml-2 mb-1">Mutuals</li>
        </ul>

        <ul className="Sort-Radio" style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #FFF', paddingTop: '0.1rem', paddingBottom: '0.1rem' }}>
          <li className="text-md leading-none ml-2 mb-1">
            <label>
             <input type="radio" name="sort" value="most" />
               Most
            </label>
           </li>
           <li className="text-md leading-none ml-2 mb-1">
             <label>
               <input type="radio" name="sort" value="least" />
                Least
             </label>
           </li>
        </ul>

        <ul className="Sort">
          <li className="text-lg leading-none ml-2 mb-1">Interactions</li>
          <li className="text-lg leading-none ml-2 mb-1">Recently Casted</li>
          <li className="text-lg leading-none ml-2 mb-1">Recently Onchain</li>
        </ul>
      </div>
	)
}