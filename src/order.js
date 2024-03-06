export async function renderOrd(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  var row = "";
  for (const ord of data) {
    row += `<tr>
              <td>${ord.id}</td>
              <td>${ord.customer_name}</td>
              <td>${ord.customer_address}</td>
              <td>${ord.customer_email}</td>
              <td>${ord.customer_phone_number}</td>
              <td>${ord.created_date}</td>
              <td  class="text-danger">${ord.status}</td>
            
      </tr>`;
  }
  return `<table class="table table-striped table-bordered"   >
                      <thead>
                          <tr>
                              <th  scope="col">ID</th>
                               <th  scope="col">Customer name</th>
                               <th  scope="col">Adress</th>
                               <th  scope="col">Email</th>
                               <th  scope="col">Phone Number</th>
                               <th  scope="col">Created day</th>
                               <th  scope="col">Status</th>
                              
                          </tr>
                      </thead>
                      <tbody>
                          ${row}
                      </tbody>
              </table>`;
}
