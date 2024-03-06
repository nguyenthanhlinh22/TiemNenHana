import { getURL } from "../src/api";

export function cartHTML() {
  if (sessionStorage.getItem("bill")) {
    var total = sessionStorage.getItem("bill");
  } else {
    total = "Cart is empty!";
  }

  return `
  <!-- NAVIGATION -->
<nav
  class="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm"
>
  <div class="container">
    <a class="navbar-brand" href="/view"
      ><i class="fa-solid fa-shop me-2"></i> <strong>Hana SHOP</strong></a
    >
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
      <div class="input-group">
        <span class="border-primary input-group-text bg-primary text-white"
          ><i class="fa-solid fa-magnifying-glass"></i
        ></span>
        <input title="search" type="text" class="form-control border-primary" />
        <button class="btn btn-primary text-white">Search</button>
      </div>
    </div>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <div class="ms-auto d-none d-lg-block">
        <div class="input-group">
          <span class="border-primary input-group-text bg-primary text-white"
            ><i class="fa-solid fa-magnifying-glass"></i
          ></span>
          <input 
            title="search-btn"
            type="text"
            class="form-control border-primary"
            style="color: #7a7a7a"
          />
          <button class="btn btn-primary text-white">Search</button>
        </div>
      </div>
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link mx-2 text-uppercase" aria-current="page" href="#"
            >Offers</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 text-uppercase" href="/view-products">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 text-uppercase" href="">Catalog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 text-uppercase" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 text-uppercase" href="#">About</a>
        </li>
      </ul>
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link mx-2 text-uppercase" href="#"
            ><i class="fa-solid fa-cart-shopping me-1"></i> Cart</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 text-uppercase" href="/admin"
            ><i class="fa-solid fa-circle-user me-1"></i> Admin</a
          >
        </li>
      </ul>
    </div>
  </div>
</nav>
  
<section class="h-100 gradient-custom">
<div class="container py-5">
  <div class="row d-flex justify-content-center my-4">
    <div class="col-md-8">
      <div class="card mb-4">
        <div class="card-header py-3">
          <h5 class="mb-0" id="total-quantity">Cart - ${sessionStorage.getItem(
            "quantity"
          )} items</h5>
        </div>
        <div class="card-body">
          
        </div>
      </div>
    
    </div>
    <div class="col-md-4">
      <div class="card mb-4">
        <div class="card-header py-3">
          <h5 class="mb-0">Summary</h5>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li
              class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
              Products
              <span class="total">$${total}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center px-0">
              Shipping
              <span>Free</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
              <div>
                <strong >Total amount</strong>
              </div>
              <span><strong class="total">$${total}</strong></span>
            </li>
          </ul>

          <a href="checkout"> <button type="button" class="btn btn-primary btn-lg btn-block check-out-btn">
          Go to checkout
          </button></a>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

<div id="footer">
<div class="footer_content">
    <div class="footer_title">
        <a href="#"><h1>Contact Us</h1></a>
    </div>
    
    <div class="footer_dress">
        <h3>Tiệm Nến Đà Nẵng </h3>
        <p class="drs">
          <b>Địa chỉ </b>: Nguyễn Huy Tưởng ,Hòa Khánh Nam Liên Chiêu ,Đà Nẵng
        </p>
        <p class="drs">
           <b> Hotline Shop</b>:0813979994
        </p>
        <p class="drs">
            <b>Hotline Tư Vấn & CSKH</b>: 081397994
        </p>
        <p class="drs">
            0813979994 (Mr.Thành Linh )
        </p>
        <p class="drs">
            <b>Email</b> : tiemanh2004@gmail.com
        </p>
        <div class="footer_icon">
            <a href="https://www.facebook.com/2004cute22/"><i class="fa-brands fa-facebook" style="color: #0552d6;"></i></a>
            <a href="https://www.tiktok.com/@tiemanh2004"><i class="fa-brands fa-tiktok" style="color: #000000;"></i></a>
            <a href="https://www.instagram.com/tiemanh2004/"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://github.com/nguyenthanhlinh22"><i class="fa-brands fa-github"></i></a>

        </div>
        <div class="footer_since">
            <p>Copyright © 2023 tiemNenHana</p>
        </div>
        
    </div>
   
    
    <div class="footer_right">
        <div class="footer_map">
            <h3> <b>Map </b></h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4936.89126664547!2d108.40849615482787!3d15.554763292240613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1699035656878!5m2!1svi!2s"  style="border:0; width: 600px ; height: 200px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">ad</iframe>
        </div>
        <div class="footer_logo">
          
        </div>
        

    </div>
</div>

</div>
`;
}

export function addtoCart() {
  var btnadds = document.querySelectorAll(".addtoCart");
  var btns = Array.from(btnadds);
  btns.forEach((e) => {
    e.addEventListener("click", async (event) => {
      event.preventDefault();
      const response = await fetch(getURL("products") + "/" + e.id);
      const data = await response.json();
      var items = JSON.parse(sessionStorage.getItem("cart"));
      if (items === null) items = [];
      items.push(data);
      getbill(items);
      sessionStorage.setItem("cart", JSON.stringify(items));
      sessionStorage.setItem("quantity", items.length);
    });
  });
}

export function renderCart() {
  var items = JSON.parse(sessionStorage.getItem("cart"));
  var cartItems = "";
  if (items !== null) {
    items.forEach((element) => {
      cartItems += `   <!-- Single item -->
      <div class="row">
        <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
          <!-- Image -->
          <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
            <img src="../images/product/${element.image}"
              class="w-100" alt="Blue Jeans Jacket" />
            <a href="#!">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
            </a>
          </div>
          <!-- Image -->
        </div>

        <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
          <!-- Data -->
          <p><strong>${element.name}</strong></p>
          <p>Detail: ${element.detail}</p>
          <button type="button" id="${element.id}" class="btn btn-primary btn-sm me-1 mb-2 removeItem" data-mdb-toggle="tooltip"
            title="Remove item">
            <i class="fas fa-trash"></i>
          </button>
          <button type="button" class="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
            title="Move to the wish list">
            <i class="fas fa-heart"></i>
          </button>
          <!-- Data -->
        </div>

        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <!-- Quantity -->
          <div class="d-flex mb-4" style="max-width: 300px">
          
          </div>
          <!-- Quantity -->

          <!-- Price -->
          <p class="text-start text-md-center">
            <strong class="item-price">$${element.price}</strong>
          </p>
          <!-- Price -->
        </div>
        <hr class="my-4" />
      </div>
      <!-- Single item -->
`;
    });
  }
  return cartItems;
}

export async function delItemCart(button) {
  var items = JSON.parse(sessionStorage.getItem("cart"));
  const response = await fetch(getURL("products") + "/" + button.id);
  const data = await response.json();

  const rmitem = items.find(
    (item) => JSON.stringify(item) === JSON.stringify(data)
  );
  console.log(rmitem);
  var newItems = items.filter((item) => {
    return item !== rmitem;
  });
  getbill(newItems);
  sessionStorage.setItem("cart", JSON.stringify(newItems));
  sessionStorage.setItem("quantity", newItems.length);
  button.parentNode.parentElement.remove();
  document.getElementById("total-quantity").innerHTML =
    "Cart - " + sessionStorage.getItem("quantity") + " items";
  var spantotal = document.getElementsByClassName("total");
  spantotal[0].innerHTML = "$" + sessionStorage.getItem("bill");
  spantotal[1].innerHTML = "$" + sessionStorage.getItem("bill");
}

export function getbill(arr) {
  var total = 0;
  arr.forEach((element) => {
    total += element.price * 1;
  });
  sessionStorage.setItem("bill", total);
  return total.toFixed(2);
}
export function checkOut() {}
