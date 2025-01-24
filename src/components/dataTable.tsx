import { useCounterStore } from '../stores/useCounterStore';

interface DataRow {
  id: number
  name: string
  value: number
}

const mockData: DataRow[] = [
  { id: 1, name: "Item 1", value: 10 },
  { id: 2, name: "Item 2", value: 20 },
  { id: 3, name: "Item 3", value: 30 },
  { id: 4, name: "Item 4", value: 40 },
  { id: 5, name: "Item 5", value: 50 }
]

export function DataTable() {
  const count = useCounterStore((state) => state.count)

  const filteredData = mockData.filter(item => item.value >= count)

  return (
    <div>
      <h2>Items with value ≥ {count}</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Value</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(row => (
            <tr key={row.id}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{row.id}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{row.name}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}