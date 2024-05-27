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
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Título 1
            </th>
            <td className="px-6 py-4">&#35;1{"{ Encabezado }"}</td>
            <td className="px-6 py-4">
              tamaño de letra 28 pixeles en negritas
            </td>
            <td className="px-6 py-4">&#35;1{"{ Ejemplo }"}</td>
            <td className="px-6 py-4">
              <h1>Ejemplo</h1>
            </td>
          </tr>
          <tr className="bg-white border-b  ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Título 2
            </th>
            <td className="px-6 py-4">&#35;2{"{ Encabezado }"}</td>
            <td className="px-6 py-4">
              tamaño de letra 24 pixeles en negritas
            </td>
            <td className="px-6 py-4">&#35;2{"{ Ejemplo }"}</td>
            <td className="px-6 py-4">
              <h2>Ejemplo</h2>
            </td>
          </tr>
          <tr className="bg-white border-b  ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Título 3
            </th>
            <td className="px-6 py-4">&#35;3{"{ Encabezado }"}</td>
            <td className="px-6 py-4">
              tamaño de letra 20 pixeles en negritas
            </td>
            <td className="px-6 py-4">&#35;3{"{ Ejemplo }"}</td>
            <td className="px-6 py-4">
              <h3>Ejemplo</h3>
            </td>
          </tr>
          <tr className="bg-white border-b  ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Negrita
            </th>
            <td className="px-6 py-4">**Negrita**</td>
            <td className="px-6 py-4">letra en negritas</td>
            <td className="px-6 py-4">**Ejemplo**</td>
            <td className="px-6 py-4">
              <b>Ejemplo</b>
            </td>
          </tr>
          <tr className="bg-white border-b  ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Italica
            </th>
            <td className="px-6 py-4">*Italica*</td>
            <td className="px-6 py-4">letra en cursiva</td>
            <td className="px-6 py-4">*Ejemplo*</td>
            <td className="px-6 py-4">
              <i>Ejemplo</i>
            </td>
          </tr>
          <tr className="bg-white border-b  ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Negrita y cursiva
            </th>
            <td className="px-6 py-4">***Negrita y cursiva***</td>
            <td className="px-6 py-4">letra en negritas y cursiva</td>
            <td className="px-6 py-4">***Ejemplo***</td>
            <td className="px-6 py-4">
              <b>
                <i>Ejemplo</i>
              </b>
            </td>
          </tr>
          <tr className="bg-white border-b  ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Subrayada
            </th>
            <td className="px-6 py-4">_Subrayada_</td>
            <td className="px-6 py-4">palabras subrayadas</td>
            <td className="px-6 py-4">_Ejemplo_</td>
            <td className="px-6 py-4">
              <u>Ejemplo</u>
            </td>
          </tr>
          <tr className="bg-white border-b  ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Salto de línea
            </th>
            <td className="px-6 py-4">#</td>
            <td className="px-6 py-4">linea nueva</td>
            <td className="px-6 py-4">Ejemplo # Ejemplo</td>
            <td className="px-6 py-4">
              Ejemplo<br></br>Ejemplo
            </td>
          </tr>
          <tr className="bg-white border-b  ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Listas ordenadas
            </th>
            <td className="px-6 py-4">
              {"\\begin{olist}"}
              {"\\end{olist}"}
            </td>
            <td className="px-6 py-4">listas ordenadas</td>
            <td className="px-6 py-4">
              {"\\begin{olist}"}
              Ejemplo Ejemplo
              {"\\end{olist}"}
            </td>
            <td className="px-6 py-4">
              <ol className="list-decimal list-inside">
                <li>Ejemplo</li>
                <li>Ejemplo</li>
              </ol>
            </td>
          </tr>
          <tr className="bg-white border-b  ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Listas sin orden
            </th>
            <td className="px-6 py-4">
              {"\\begin{ulist}"}
              {"\\end{ulist}"}
            </td>
            <td className="px-6 py-4">listas sin orden</td>
            <td className="px-6 py-4">
              {"\\begin{ulist}"}
              Ejemplo Ejemplo
              {"\\end{ulist}"}
            </td>
            <td className="px-6 py-4">
              <ul className="list-disc list-inside">
                <li>Ejemplo</li>
                <li>Ejemplo</li>
              </ul>
            </td>
          </tr>
          <tr className="bg-white border-b  ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              URL
            </th>
            <td className="px-6 py-4">{"[[url]{Título}]"}</td>
            <td className="px-6 py-4">liga para llevarte a otra página</td>
            <td className="px-6 py-4">{"[[www.google.com]{Google}]"}</td>
            <td className="px-6 py-4">
              <a href="www.google.com">Google</a>
            </td>
          </tr>
          <tr className="bg-white border-b  ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Código
            </th>
            <td className="px-6 py-4">{"<>print(Ejemplo)<>"}</td>
            <td className="px-6 py-4">
              Se pone en un formato especial para diferenciar el código del
              resto del texto
            </td>
            <td className="px-6 py-4">{"<>print(Ejemplo)<>"}</td>
            <td className="px-6 py-4">
              <code>print(Ejemplo)</code>
            </td>
          </tr>
          <tr className="bg-white border-b  ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Texto plano
            </th>
            <td className="px-6 py-4">&quot;Texto&quot;</td>
            <td className="px-6 py-4">
              El contenido que este dentro de estos caracteres se desplegara
              como tal
            </td>
            <td className="px-6 py-4">&quot;Ejemplo&quot;</td>
            <td className="px-6 py-4">
              <p>Ejemplo</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
