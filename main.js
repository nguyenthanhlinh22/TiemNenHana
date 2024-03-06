import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/admin.css";
import "./css/user.css";
import homepage from "./user-view/homepage";
import { dashboardHTML } from "./src/dashboard";
import { homedb } from "./src/homepagedb";
import { getURL, toggleForm } from "./src/api";
import { loadCatename } from "./src/categories";
import {
  renderAPI,
  postData,
  getData,
  delData,
  getdataAPI,
  editData,
  getdataEdit,
  patchData,
} from "./src/api";
import { getSelect, ViewProducts, top5, loadCatePros } from "./src/products";
import { cartHTML, addtoCart, renderCart, delItemCart } from "./user-view/cart";
import { userProductHTML } from "./user-view/products";
import { checkoutHTML, finishOrder } from "./user-view/checkout";
import { confirmHTML } from "./user-view/confirm";
import router from "./routes";

// sidebar toggle

const home = () => {
  window.addEventListener("load", () => {
    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector("#sidebarToggle");
    if (sidebarToggle) {
      // Uncomment Below to persist sidebar toggle between refreshes
      if (localStorage.getItem("sb|sidebar-toggle") === "true") {
        document.body.classList.toggle("sb-sidenav-toggled");
      }
      sidebarToggle.addEventListener("click", (event) => {
        event.preventDefault();
        document.body.classList.toggle("sb-sidenav-toggled");
        localStorage.setItem(
          "sb|sidebar-toggle",
          document.body.classList.contains("sb-sidenav-toggled")
        );
      });
    }
    const btnAdd = document.querySelector("#addNewBtn");

    if (btnAdd) {
      toggleForm(btnAdd);
    }
  });
  router
    .on("/admin", async function () {
      document.querySelector(".container").innerHTML = dashboardHTML();
      document.querySelector("#admin-bg").innerHTML = homedb();
      document.querySelector("#addNewBtn").classList.add("d-none");
      document.querySelector("#page-content-wrapper").style.backgroundColor =
        "#212529";
    })
    .on("/admin-categories", async function () {
      document.querySelector(".container").innerHTML = dashboardHTML();
      document.querySelector("#app").innerHTML = await renderAPI("categories");
      document.getElementById("postData").addEventListener("submit", () => {
        let data = getData("categories");
        postData("categories", data);
      });
      document.querySelectorAll(".btnDel").forEach((button) => {
        button.addEventListener("click", (event) => {
          event.preventDefault();
          if (confirm("Xác nhận xóa ?") == true) {
            console.log("okkk");
            delData(button, "categories");
            return true;
          } else return false;
        });
      });
      document.querySelectorAll(".btnEdit").forEach((button) => {
        button.addEventListener("click", (event) => {
          event.preventDefault();
          editData(button, "categories");
        });
      });

      document.getElementById("updateData").addEventListener("submit", () => {
        let data = getdataEdit("categories");
        let id = document.getElementById("idnewdata").value;
        patchData(id, "categories", data);
        alert("Cập nhật thành công!");
      });
    })
    .on("/admin-products", async function () {
      document.querySelector(".container").innerHTML = dashboardHTML();
      const cateData = await getdataAPI("categories");
      console.log(cateData);
      var select = getSelect(cateData);
      document.querySelector("#app").innerHTML = await renderAPI("products");
      document.querySelector("select").innerHTML = select;
      document.getElementById("postData").addEventListener("submit", () => {
        let data = getData("products");
        console.log(data);
        postData("products", data);
      });
      document.querySelectorAll(".btnDel").forEach((button) => {
        button.addEventListener("click", () => {
          if (confirm("Xác nhận xóa ?") == true) {
            delData(button, "products");
          }
        });
      });
      document.querySelectorAll(".btnEdit").forEach((button) => {
        button.addEventListener("click", (event) => {
          event.preventDefault();
          editData(button, "products");
        });
      });
      document.getElementById("updateData").addEventListener("submit", () => {
        let data = getdataEdit("products");
        let id = document.getElementById("idnewpro").value;
        patchData(id, "products", data);
        alert("Cập nhật thành công!");
      });
    })
    .on("admin-orders", async function () {
      document.querySelector(".container").innerHTML = dashboardHTML();
      document.querySelector("#addNewBtn").classList.add("d-none");
      document.querySelector("#app").innerHTML = await renderAPI("orders");
    })
    .on("admin-order_details", async function () {
      document.querySelector(".container").innerHTML = dashboardHTML();
      document.querySelector("#addNewBtn").classList.add("d-none");
      document.querySelector("#app").innerHTML = await renderAPI(
        "order_details"
      );
    })
    .on("/", async function () {
      document.querySelector(".container").innerHTML = await homepage();
      document.querySelector("#top-5").innerHTML = await top5(
        getURL("products")
      );
    })
    .on("/view", async function () {
      sessionStorage.clear();
      document.querySelector(".container").innerHTML = await homepage();
      document.querySelector("#top-5").innerHTML = await top5(
        getURL("products")
      );
    })
    .on("/view-products", async function () {
      document.querySelector(".container").innerHTML = userProductHTML();
      document.querySelector(".dropdown-menu").innerHTML = await loadCatename();
      document.querySelector(".products-content").innerHTML =
        await ViewProducts();
      var cateBtns = document.querySelectorAll(".dropdown-item");
      cateBtns.forEach((e) => {
        e.addEventListener("click", async function (event) {
          event.preventDefault();
          console.log(e.id);
          document.querySelector(".products-content").innerHTML =
            await loadCatePros(e.id);
          addtoCart();
        });
      });
      addtoCart();
    })
    .on("/cart", async function () {
      // sessionStorage.removeItem("cart");
      document.querySelector(".container").innerHTML = cartHTML();
      document.querySelector(".card-body").innerHTML = renderCart();
      var btnRemoves = document.querySelectorAll(".removeItem");
      btnRemoves.forEach((button) => {
        button.addEventListener("click", (event) => {
          event.preventDefault();
          delItemCart(button);
        });
      });
    })
    .on("/checkout", async function () {
      document.querySelector(".container").innerHTML = checkoutHTML();
      document.getElementById("finishOD").addEventListener("click", () => {
        let data = getData("orders");
        postData("orders", data);
        finishOrder();
        sessionStorage.setItem("user", JSON.stringify(data));
      });
    })
    .on("/confirm", async function () {
      document.querySelector("body").innerHTML = confirmHTML();
    })
    .resolve();
};
home();


























