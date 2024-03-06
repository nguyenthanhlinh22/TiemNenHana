import { renderCate } from "./categories";
import { renderPro } from "./products";
import { renderOrd } from "./order";
import { renderOrddetails } from "./order_details";
import { getSelect } from "./products";
export function getURL(URL) {
  return `http://localhost:30001/${URL}`;
}

export function renderAPI(table) {
  const url = getURL(table);
  switch (table) {
    case "categories":
      return renderCate(url);

    case "products":
      return renderPro(url);

    case "orders":
      return renderOrd(url);

    case "order_details":
      return renderOrddetails(url);
  }
}
export function toggleForm(button) {
  button.addEventListener("click", () => {
    document.querySelector("form").classList.toggle("d-none");
  });
}
export function getData(table) {
  switch (table) {
    case "categories": {
      var nameCate = document.getElementById("nameCate").value;
      const dataCate = {
        name: nameCate,
      };
      return dataCate;
    }
    case "products": {
      var cate_id = document.getElementById("cate_id").value;
      var name = document.getElementById("name").value;
      var price = document.getElementById("price").value;
      var detail = document.getElementById("detail").value;
      var image = document.getElementById("image").files[0];

      const dataPro = {
        name: name,
        cate_id: cate_id,
        price: price,
        detail: detail,
        image: image.name,
      };
      return dataPro;
    }
    case "orders": {
      var customer_name = document.getElementById("fname").value;
      var customer_address = document.getElementById("adr").value;
      var customer_email = document.getElementById("email").value;
      var customer_phone_number = document.getElementById("phone").value;
      var created_date = String(new Date());
      const dataOrd = {
        customer_name: customer_name,
        customer_address: customer_address,
        customer_email: customer_email,
        customer_phone_number: customer_phone_number,
        created_date: created_date,
        status: "Checking",
      };
      return dataOrd;
    }
  }
}
export async function getdataAPI(URL) {
  const url = getURL(URL);
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
export async function postData(url, data) {
  const URL = getURL(url);
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
export async function patchData(id, url, data) {
  const URL = getURL(url) + `/${id}`;
  console.log(URL);
  const response = await fetch(URL, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
export function delData(button, table) {
  const URL = getURL(table) + `/${button.id}`;
  fetch(URL, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  button.parentNode.parentElement.remove();
}

export async function editData(button, table) {
  switch (table) {
    case "categories": {
      const URL = getURL(table) + `/${button.id}`;
      const response = await fetch(URL);
      const data = await response.json();
      document.getElementById("updateData").classList.toggle("d-none");
      document.getElementById("namenewCate").placeholder = data.name;
      document.getElementById("idnewdata").value = data.id;
      break;
    }
    case "products": {
      const URL = getURL(table) + `/${button.id}`;
      const response = await fetch(URL);
      const data = await response.json();
      const cateData = await getdataAPI("categories");
      var select = getSelect(cateData);
      console.log(select);
      console.log(document.querySelector("select#newcate_id"));
      document.getElementById("updateData").classList.toggle("d-none");
      document.getElementById("idnewpro").value = data.id;
      document.getElementById("newnamepro").placeholder = data.name;
      document.getElementById("newnamepro").value = data.name;
      document.querySelector("select#newcate_id").innerHTML = select;
      document.getElementById("newcate_id").value = data.cate_id;
      document.getElementById("newprice").placeholder = data.price;
      document.getElementById("newprice").value = data.price;
      document.getElementById("newdetail").placeholder = data.detail;
      document.getElementById("newdetail").value = data.detail;
    }
  }
}
export function getdataEdit(table) {
  switch (table) {
    case "categories": {
      var newname = document.getElementById("namenewCate").value;
      const data = {
        name: newname,
      };
      return data;
    }
    case "products": {
      var newnamepro = document.getElementById("newnamepro").value;
      var newcate_id = document.getElementById("newcate_id").value;
      var newprice = document.getElementById("newprice").value;
      var newdetail = document.getElementById("newdetail").value;
      var newimage = document.getElementById("newimage").files[0];
      const data = {
        name: newnamepro,
        cate_id: newcate_id,
        price: newprice,
        detail: newdetail,
        image: newimage.name,
      };
      return data;
    }
  }
}
