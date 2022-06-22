import { ChangeEvent, useContext, useRef } from 'react';
import { PlacesContext } from '../context';
import { SearchResults } from './SearchResults';

export const SearchBar = () => {
  const debouncedRef = useRef<NodeJS.Timeout>();
  const { searchPlacesByTearm } = useContext(PlacesContext)

  const onQueryChanged = ( e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if(debouncedRef.current)
      clearTimeout( debouncedRef.current );

    debouncedRef.current = setTimeout(() => { 
      // console.log('debounced value: ', value);

      // todo: buscar o ejecutar consulta
      searchPlacesByTearm( value )
    }, 350);
  }


  return (
    <div className='search-container'>
        <input type="text" className='form-control' placeholder='Buscar lugar....' onChange={ onQueryChanged } />

        <SearchResults />
    </div>
  )
}
