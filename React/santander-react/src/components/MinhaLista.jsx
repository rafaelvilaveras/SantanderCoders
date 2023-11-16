export default function MinhaLista() {

  const minhaLista = [
    <h4 key={'item-1'}>Item 1</h4>,
    <h4 key={'item-2'}>Item 2</h4>,
    <h4 key={'item-3'}>Item 3</h4>,
    <h4 key={'item-4'}>Item 4</h4>,
    <h4 key={'item-5'}>Item 5</h4>,
  ]

  const exemploListaMap = [
    {
      id: 'item-1',
      name: 'item 1'
    },
    {
      id: 'item-2',
      name: 'item 2'
    },
    {
      id: 'item-3',
      name: 'item 3'
    },
  ]

  return exemploListaMap.map((item) => {
    return <h4 key={item.id}>{item.name}</h4>
  });
}