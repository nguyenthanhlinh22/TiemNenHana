import { getURL } from "./api";
export async function renderPro(url) {
  const response = await fetch(url);
  const data = await response.json();
  var row = "";
  for (const product of data) {
    row += `<tr>
              <td>${product.id}</td>
              <td>${product.name}</td>
              <td>${product.cate_id}</td>
              <td>${product.price}</td>
              <td>${product.detail}</td>
              <td><img id="img-td" src="../images/product/${product.image}"></td>
              <td>
                  <button id="${product.id}" class="btnDel"><i class="fa-solid fa-trash" style="color: #e60f0f;"></i></button>
                  <button id="${product.id}" class="btnEdit"><i class="fa-solid fa-pen" style="color: #029213;"></i></button>
              </td>
      </tr>`;
  }
  return `
  <form id="postData" class="form-control p-3 d-none">
  
    <div class="mb-1"> 
    <label class="form-label">Name of Product:</label>
    <input type="text" class="form-control" id="name" >
  </div> 
    <div class ="d-flex mb-2">
      <div class="col-3 me-3">
          <label class="form-label">ID cate:</label>
          <select id="cate_id" class="form-select form-select-sm" aria-label=".form-select-sm example">     
          </select>
      </div>
      <div class='col-6'>
      <label class="form-label">Price:</label>
      <input type="text" class="form-control" id="price" >
      </div>
    </div>
     <div class="mb-2">
          <textarea id="detail" placeholder="Nhập chi tiết sản phẩm..." class="form-control"></textarea>
     </div>
     <div class="mb-2">
     <input type="file" class="form-control" id="image" >
     </div>
    <div class="row">
          <button type="submit" class="btn btn-success  ">Submit</button>
    </div>
</form>

<form id="updateData" class="form-control p-3 d-none">
  
<div class="mb-1"> 
<input type="hidden" id="idnewpro">
<label class="form-label">Name of Product:</label>
<input type="text" class="form-control" id="newnamepro" >
</div> 
<div class ="d-flex mb-2">
  <div class="col-3 me-3">
      <label class="form-label">ID cate:</label>
      <select id="newcate_id" class="form-select form-select-sm" aria-label=".form-select-sm example">     
      </select>
  </div>
  <div class='col-6'>
  <label class="form-label">Price:</label>
  <input type="text" class="form-control" id="newprice" >
  </div>
</div>
 <div class="mb-2">
      <textarea id="newdetail" placeholder="Nhập chi tiết sản phẩm..." class="form-control"></textarea>
 </div>
 <div class="mb-2">
 <input type="file" class="form-control" id="newimage" >
 </div>
<div class="row">
      <button type="submit" class="btn btn-success  ">Update</button>
</div>
</form>


  <table class="table table-striped table-bordered">
                      <thead>
                          <tr>
                              <th  scope="col">ID</th>
                               <th  scope="col">Name of Categories</th>
                               <th  scope="col">Id of Category</th>
                               <th  scope="col">Price</th>
                               <th  scope="col">Detail</th>
                               <th  scope="col">image</th>
                          </tr>
                      </thead>
                      <tbody>
                          ${row}
                      </tbody>
              </table>`;
}
export function getSelect(arr) {
  var select = "";
  for (const item of arr) {
    select += `<option value='${item.id}'>${item.id}</option>`;
  }
  return select;
}

//hiển thị top 5
export async function top5(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  var top5 = "";
  for (var i = 0; i <= 4; i++) {
    top5 += `<div class="card w-25 d-flex flex-column align-items-center mx-1" style="">
      <img src="../images/product/${data[i].image}" class="card-img-top mb-3" alt="...">
      <div class="card-body w-100 p-3">
        <h5 class="card-title fs-5">${data[i].name}</h5>
        <p class="card-text text-success w-100 fs-5">$${data[i].price}</p>
        <a href="#" class="btn btn-primary">Buy it now</a>
      </div>
    </div>`;
  }
  return top5;
}

// hiển thị product 
export async function ViewProducts() {
  const response = await fetch(getURL("products"));
  const data = await response.json();
  var proHTML = "";
  data.forEach((element) => {
    proHTML += `
    
    <div class="w-25 d-flex flex-column mb-3 border" style="">
    <img src="../images/product/${element.image}" class="mb-3 mx-auto" style="height:160px;width:140px" alt="...">
    <div class="w-75 h-50 p-2 d-flex flex-column mx-auto">
      <h6 class="fs-6 mx-auto style"text align : center""><a href="">${element.name}</a></h6>
      <p class="product-detail">${element.detail}</p>
      <span class=" w-100 fs-5 mb-3 my-auto">Price: <strong class="text-success">$${element.price}</strong></span>
      <a href="#"  id="${element.id}" class="addtoCart btn btn-primary w-75 mx-auto h-25">Add to cart <i class="fa-solid fa-cart-shopping"></i></a>
    </div>
    
  </div>`;
  });
  return proHTML;
}
export async function pagiantionBtn() {
  const response = await fetch(getURL("products"));
  const data = await response.json();
  console.log(data);
  let perPage = 9;
  // let currentPage = 1;
  // let start = 0;
  // let end = perPage;
  let totalPages = data.length / perPage;
  let grPag = "";
  var pageHTML = "";
  for (var i = 0; i <= totalPages; i++) {
    grPag += `<li class="page-item"><a class="page-link" href="#">${
      i + 1
    }</a></li>`;
  }
  document.querySelector(".group-pagni").innerHTML = grPag;
  const btnPags = document.getElementsByClassName("page-item");
  var elements = Array.from(btnPags);
  elements.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(element.textContent);
      for (
        var index = element.textContent;
        index <= element.textContent * perPage;
        index++
      ) {
        console.log(data[index].name);
        pageHTML += `<p>${data[index].name}</p>`;
      }
      document.querySelector(".list-pros").innerHTML = pageHTML;
    });
  });

  return true;
}
export async function loadCatePros(ID) {
  const response = await fetch(getURL("products"));
  const data = await response.json();
  var proHTML = "";
  if (ID != 0) {
    let cateID = (e) => e.cate_id == ID;
    const cateData = data.filter(cateID);
    console.log(cateData);
    cateData.forEach((element) => {
      proHTML += `<div class="w-25 d-flex flex-column mb-3 border">
      <img src="../images/product/${element.image}" class="mb-3 mx-auto" style="height:160px;width:140px" alt="...">
      <div class="h-50 p-2 d-flex flex-column w-100">
      <h6 class="fs-6">${element.name}</h6>
      <p class="product-detail">${element.detail}</p>
      <span class=" w-100 fs-5 mb-3 my-auto">Price: <strong class="text-success">$${element.price}</strong></span>
      <a href="#" id="${element.id}" class="addtoCart btn btn-primary w-75 mx-auto h-25">Add to cart <i class="fa-solid fa-cart-shopping"></i></a>
      </div>
    </div>`;
    });
  } else {
    proHTML = await ViewProducts();
  }
  return proHTML;
}
