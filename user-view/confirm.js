import { getbill } from "./cart";
export function confirmHTML() {
  var user = JSON.parse(sessionStorage.getItem("user"));
  var cart = JSON.parse(sessionStorage.getItem("cart"));
  console.log(cart);
  var total = getbill(cart);
  var html = "";
  cart.forEach((element) => {
    html += `<tr>
          <td width="20%">
          <img src="../images/product/${element.image}" width="90">

      </td>

      <td width="60%">
          <span class="font-weight-bold">${element.name}</span>
          <div class="product-qty">

              <span>${element.detail}</span>

          </div>
      </td>
      <td width="20%">
          <div class="text-right">
              <span class="font-weight-bold">$${element.price}</span>
          </div>
      </td>
      </tr>`;
  });
  return `<div class="container m-5">
 <a href="/view" class="text"> <i class="fa fa-arrow-left"></i> Back to new shopping</a>
  <div class="row d-flex justify-content-center">
     <div class="col-md-8">
        <div class="card">
           <div class="text-left logo p-2 px-3">
              <img src="https://i.pinimg.com/474x/2e/42/9b/2e429b6be09324977c66c49255af9ce4.jpg" width="50">
           </div>
           <div class="invoice h-75 p-3">
              <h5>Your order Confirmed!</h5>
              <span class="font-weight-bold d-block mt-4">Hello, <b>${user.customer_name}</b></span>
              <span>You order has been confirmed and will be shipped in next two days!</span>
              <div class="payment border-top mt-3 mb-3 border-bottom table-responsive">
                 <table class="table table-borderless">
                    <tbody>
                       <tr>
                          <td>
                             <div class="py-2 w-50">
                                <span class="d-block text-muted">Order Date</span>
                                <span>${user.created_date}</span>
                             </div>
                          </td>
                         
                          <td colspan="2"> 
                             <div class="py-2">
                                <span class="d-block text-muted">Shiping Address</span>
                                <span>${user.customer_address}</span>
                             </div>
                          </td>
                       </tr>
                    </tbody>
                 </table>
              </div>
              <div class="product border-bottom table-responsive">
                 <table class="table table-borderless">
                    <tbody>
                       ${html}
                    </tbody>
                 </table>
              </div>
              <div class="row d-flex justify-content-end">
                 <div class="col-md-5">
                    <table class="table table-borderless">
                       <tbody class="totals">
                          <tr>
                             <td>
                                <div class="text-left">
                                   <span class="text-muted">Subtotal</span>
                                </div>
                             </td>
                             <td>
                                <div class="text-right">
                                   <span>${total}</span>
                                </div>
                             </td>
                          </tr>
                          <tr>
                             <td>
                                <div class="text-left">
                                   <span class="text-muted">Shipping Fee</span>
                                </div>
                             </td>
                             <td>
                                <div class="text-right">
                                   <span>Free ship</span>
                                </div>
                             </td>
                          </tr>
                          <tr>
                             <td>
                                <div class="text-right">
                                   <span class="text-success"></span>
                                </div>
                             </td>
                          </tr>
                          <tr class="border-top border-bottom">
                             <td>
                                <div class="text-left">
                                   <span class="font-weight-bold">Subtotal</span>
                                </div>
                             </td>
                             <td>
                                <div class="text-right">
                                   <span class="font-weight-bold">$${total}</span>
                                </div>
                             </td>
                          </tr>
                       </tbody>
                    </table>
                 </div>
              </div>
              <p>We will be sending shipping confirmation email when the item shipped successfully!</p>
              <p class="mb-0"><b>Thanks for shopping with us!</b></p>
           </div>
        </div>
     </div>
  </div>
</div>`;
}
