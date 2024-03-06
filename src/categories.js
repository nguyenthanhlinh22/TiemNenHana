import { getURL } from "./api";

export async function renderCate(url) {
  const response = await fetch(url);
  const data = await response.json();

  var row = "";

  for (const cate of data) {
    row += `<tr>
            <td>${cate.id}</td>
            <td>${cate.name}</td>
            <td>
                <button class='btnDel' id=${cate.id}><i class="fa-solid fa-trash" style="color: #e60f0f;"></i></button>
                <button class='btnEdit' id=${cate.id}><i class="fa-solid fa-pen" style="color: #029213;"></i></button>
            </td>
    </tr>`;
  }

  return `
  <form id="updateData" class="form-control p-3 d-none">
  <div class="mb-3"> 
    <input type="hidden" id="idnewdata">
   <label for="exampleInputEmail1" class="form-label">Update Category</label>
   <input name="nameCate" type="text" class="form-control" id="namenewCate" >
 </div>
 <button type="submit" class="btn btn-success id="btnSubmit">Submit</button>
</form>

  <form id="postData" class="form-control p-3 d-none">
   <div class="mb-3"> 
    <label for="exampleInputEmail1" class="form-label">Name of new Category</label>
    <input name="nameCate" type="text" class="form-control" id="nameCate" >
  </div>
  <button type="submit" class="btn btn-success id="btnSubmit">Submit</button>
</form>
  <table class="table table-striped table-bordered"   >
                
                    <thead>
                        <tr>
                            <th  scope="col">ID</th>
                             <th  scope="col">Name of Categories</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${row}
                    </tbody>
            </table>`;
}

export async function loadCatename() {
  const response = await fetch(getURL("categories"));
  const data = await response.json();
  var html = "";
  data.forEach((element) => {
    html += `<li><a class="dropdown-item" href="#" id="${element.id}">${element.name}</a></li>`;
  });
  return html;
}
