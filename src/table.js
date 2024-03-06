// export async function renderAPI(url) {
//   const res = await fetch(url);
//   const data = await res.json();
//   var tbody = ``;
//   var thead = ``;
//   var arrThear = [];
//   var arrRow = [];
//   for (const item of data) {
//     var val = Object.values(item);

//     arrRow.push(val);
//     Object.keys(item).forEach((key) => {
//       arrThear.push(key);
//     });
//   }
//   const arrT = new Set(arrThear);
//   arrT.forEach((th) => {
//     thead += `<th scope="col">${th}</th>`;
//   });
//   console.log(arrRow);
//   arrRow.forEach((element) => {
//     var tr = ``;
//     element.forEach((td) => {
//       tr += `<td>${td}</td>`;
//     });
//     tbody += `<tr>${tr}
//         <td>
//           <button name="${url}" id="${element[0]}" class ="btn btn-danger del">Delete</button>
//           <button id="${element[0]}" class ="btn btn-success edit">Edit</button>
//         </td>
//     </tr>`;
//   });
//   // console.log(tbody);
//   // console.log(thead);
//   return `<table class="table table-bordered">
//  <thead class="thead-dark">
//  ${thead} <th scope="col">Handle</th>
//  </thead>
//  <tbody>
//   ${tbody}
//  </tbody>
//   </table>`;
// }
// export const handleClick = (button) => {
//   button.addEventListener("click", () => {
//     console.log("ok");
//   });
// };
// delete;
// export const delBtn = (button) => {
//   button.addEventListener("click", () => {
//     alert("ok");
//     fetch(`${button.name}/${button.id}`, {
//       method: "delete",
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .catch((err) => console.log(err));
//     window.location.reload();
//   });
// };
// export const editBtn = (button) => {
//   button.addEventListener("click", () => {
//     console.log(`this is edit button`);
//   });
// };
// export const addNewBtn = (button) => {
//   button.addEventListener("click", () => {
//     if (location.href.includes("categories")) {
//       console.log("categories");
//       document.querySelector("#add").innerHTML = `
//       <form action='#' id="add_form">
//       <div class="form-group">
//           <input name="id" type="hidden" class="form-control" id="">
//           <label for="exampleFormControlInput1">Name of Categories:</label>
//           <input name="name" type="text" class="form-control" id="">
//       </div>
//      <input id='submit-btn' type="submit" class="btn link-success"><button id="cancelAdd" class="btn link-danger">Cancel</button>
//       </form>`;
//       // POST function
//       postData("categories");
//     } else if (location.href.includes("products")) {
//       console.log("products");
//       document.querySelector("#add").innerHTML = `
//       <form id="add_form" enctype="multipart/form-data>
//       <div class="form-group">
//           <div class="d-flex">
//               <div class="mx-2">
//                 <label> ID:</label>
//                 <input type="text" name="id" class="form-control " id="id">
//               </div>
//               <div class="mx-2">
//                 <label>Category ID:</label>
//                 <input type="text" name="cate_id" class="form-control " id="cate_id">
//               </div>
//               </div>
//           <label>Name of Product:</label>
//           <input type="text" name="name" class="form-control" id="name">
//           <label>Price:</label>
//           <input type="text" name="price" class="form-control" id="price">
//           <label>Image:</label>
//           <input name="image" id="image" type="file">
//           <img src="" id="img_show"> <br>
//           <label>Detail:</label>
//           <textarea name="detail" id="detail" class="form-control"></textarea>

//       </div>
//      <input id="submit-btn" type="submit" class="btn link-success"><button id="cancelAdd" class="btn link-danger">Cancel</button>
//       </form>
//      `;
//       showImage();
//       //  POST function
//       // postData("products");
//       postDataFile("products");
//     } else if (location.href.includes("orders")) {
//       // orders input
//       postData("orders");
//     } else if (location.href.includes("order_details")) {
//       // orders details input
//       postData("orders_detail");
//     }
//     document.getElementById("cancelAdd").addEventListener("click", (e) => {
//       e.preventDefault();
//       document.getElementById("add_form").classList.toggle("d-none");
//     });
//   });
// };
// function postData(URL) {
//   document.getElementById("add_form").addEventListener("submit", (e) => {
//     // e.preventDefault();
//     const data = new FormData(document.querySelector("#add_form"));
//     console.log(data);
//     console.log(Object.fromEntries(data));
//     fetch(`http://localhost:3000/${URL}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(Object.fromEntries(data)),
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .catch((err) => console.log(err));
//     location.reload;
//   });
// }
// function postDataFile(URL) {
//   document.getElementById("add_form").addEventListener("submit", (e) => {
//     let id = document.getElementById("id").value;
//     let cate_id = document.getElementById("cate_id").value;
//     let name = document.getElementById("name").value;
//     let price = document.getElementById("price").value;
//     let detail = document.getElementById("detail").value;
//     let image = document.getElementById("image").files[0].name;

//     let data = {
//       id: id,
//       name: name,
//       cate_id: cate_id,
//       price: price,
//       detail: detail,
//       image: image,
//     };
//     console.log(data.image);
//     fetch(`http://localhost:3000/${URL}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .catch((err) => console.log(err));
//   });
//   location.reload;
// }
// function showImage() {
//   document.getElementById("image").addEventListener("change", () => {
//     var imgShow = document.getElementById("img_show");
//     var img = document.getElementById("image").files[0].name;
//     // console.log(img, upload, document.getElementById("image"));
//     imgShow.setAttribute("src", `./images/${img}`);
//   });
// }
