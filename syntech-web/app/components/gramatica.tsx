export default function Gramatica() {
return (
  <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Caracter(es)
            </th>
            <th scope="col" className="px-6 py-3">
              Descripción
            </th>
            <th scope="col" className="px-6 py-3">
              Ejemplo
            </th>
            <th scope="col" className="px-6 py-3">
              Resultado
            </th>
          </tr>
      </thead>
      <tbody>
        <tr className="bg-white border-b  ">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
            Título 1
          </th>
          <td className="px-6 py-4">
            &#35;1{"{ Encabezado }"}
          </td>
          <td className="px-6 py-4">
            tamaño de letra 28 pixeles en negritas
          </td>
          <td className="px-6 py-4">
                &#35;1{"{ Ejemplo }"}
          </td>
          <td className="px-6 py-4">
            Ejemplo
          </td>
        </tr>
      </tbody>
    </table>
  </div>      
  );
}