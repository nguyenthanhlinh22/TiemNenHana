export async function renderOrddetails(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  var row = "";
  for (const ordD of data) {
    ordD.detail.forEach((element) => {
      row += `<tr>
                <td>${ordD.id}</td>
                <td>${element.product_id}</td>
                <td>${element.quantity}</td>
                <td>$${element.unit_price}</td>
               
        </tr>`;
    });
  }
  return `
  
  <table class="table table-striped table-bordered">
  
                        <thead>
                            <tr>
                                <th  scope="col">Order ID</th>
                                 <th  scope="col">ID of Products</th>
                                 <th  scope="col">Quantity</th>
                                 <th  scope="col">Unit Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${row}
                        </tbody>
                </table>`;
}
