import { postData } from "../src/api";
export function checkoutHTML() {
  return ` <!-- NAVIGATION -->
  <nav
    class="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm"
  >
    <div class="containerck">
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
          <span class="border-warning input-group-text bg-warning text-white"
            ><i class="fa-solid fa-magnifying-glass"></i
          ></span>
          <input title="search" type="text" class="form-control border-warning" />
          <button class="btn btn-warning text-white">Search</button>
        </div>
      </div>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <div class="ms-auto d-none d-lg-block">
          <div class="input-group">
            <span class="border-warning input-group-text bg-warning text-white"
              ><i class="fa-solid fa-magnifying-glass"></i
            ></span>
            <input 
              title="search-btn"
              type="text"
              class="form-control border-warning"
              style="color: #7a7a7a"
            />
            <button class="btn btn-warning text-white">Search</button>
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
  <!-- NAVIGATION -->
    <div class="containerck">

        <div class="rowck w-50 mx-auto my-3">
      
          <div class="guest-info d-flex flex-column mx-4 border p-4">
            <h3>Billing Address</h3>
            <label for="fname"><i class="fa fa-user"></i> Full Name</label> 
            <input class="form-control mb-2" type="text" id="fname" name="firstname" placeholder="Your name...">
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <input class="form-control mb-2" type="email" id="email" name="email" placeholder="Your email...">
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input class="form-control mb-2" type="text" id="adr" name="address" placeholder="Your address...">
            <label for="phone"><i class="fa fa-phone"></i> Phone number</label>
            <input class="form-control mb-2" type="text" id="phone" name="city" placeholder="Number..">
            <div class="total my-2"><strong class="">Total Payment: $${sessionStorage.getItem(
              "bill"
            )}</strong></div>
        
          <label>
                  <input type="checkbox" checked="checked" name="sameadr"> Shipping address same as billing
          </label> <br>
          <a href="/confirm"><button type="button" id="finishOD" class="w-75 mx-auto btn btn-success">Check out now!</button></a>
          </div>
          

        </div>
  
        </div>
        
  `;
}
export async function finishOrder() {
  const detailorder = JSON.parse(sessionStorage.getItem("cart"));
  console.log(detailorder);
  let dataDetails = [];
  detailorder.forEach((element) => {
    dataDetails.push({
      product_id: element.id,
      quantity: 1,
      unit_price: element.price,
    });
  });
  postData("order_details", { detail: dataDetails });
  sessionStorage.setItem("ord_detail", JSON.stringify(dataDetails));
}
