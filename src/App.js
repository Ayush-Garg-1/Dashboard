import "./App.css";
const App = () => {
  return (
    <>
      <section className="dashboard-section">
        <div className="left-dashboard">
          <div className="top-heading">
            <i class="fa-solid fa-dice-d6 itag"></i>
            <h1>dashboard</h1>
          </div>
          <div className="flex-box active">
            <i class="fa-solid fa-key"></i>
            <p>dashboard</p>
          </div>
          <div className="flex-box">
            <i class="fa-brands fa-product-hunt"></i>
            <p>product</p>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
          <div className="flex-box">
            <i class="fa-brands fa-intercom"></i>
            <p>customres</p>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
          <div className="flex-box">
            <i class="fa-solid fa-vault"></i>
            <p>income</p>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
          <div className="flex-box">
            <i class="fa-brands fa-stumbleupon-circle"></i>
            <p>promote</p>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
          <div className="flex-box">
            <i class="fa-brands fa-hire-a-helper"></i>
            <p>help</p>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
          <div className="user active">
            <img src="./user.jpeg" alt="user" />
            <div className="user-info">
              <h3>ayush</h3>
              <p>project manager</p>
            </div>
            <i class="fa-solid fa-angle-down"></i>
          </div>
        </div>
        <div className="right-dashboard">
          <div className="top_navbar">
            <p>Hello Everyone 👋 ,</p>
            <div className="search-bar">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="search" />
            </div>
          </div>
          <div class="top-box">
            <div className="box1">
              <i class="fa-solid fa-hand-holding-dollar"></i>
              <div class="info-box">
                <p>earning</p>
                <h1>$198K</h1>
                <p>
                  <span>⬆ 37.8%</span> this month
                </p>
              </div>
            </div>

            <div className="box1">
              <i
                class="fa-solid fa-file-contract"
                style={{
                  color: "magenta",
                  backgroundColor: "rgb(255, 0, 255,0.2)",
                }}
              ></i>
              <div class="info-box">
                <p>orders</p>
                <h1>$2.4k</h1>
                <p>
                  <span style={{ color: "orangered" }}>⬇ 2%</span> this month
                </p>
              </div>
            </div>

            <div className="box1">
              <i
                class="fa-solid fa-scale-balanced"
                style={{ color: "blue", backgroundColor: "rgb(7, 7, 252,0.2)" }}
              ></i>
              <div class="info-box">
                <p>balance</p>
                <h1>$2.4k</h1>
                <p>
                  <span style={{ color: "orangered" }}>⬇ 2%</span> this month
                </p>
              </div>
            </div>

            <div className="box1">
              <i
                class="fa-solid fa-lock"
                style={{
                  color: "orangered",
                  backgroundColor: "rgb(255, 192, 203,0.3)",
                }}
              ></i>
              <div class="info-box">
                <p>total sales</p>
                <h1>$89K</h1>
                <p>
                  <span>⬆ 11%</span> this week
                </p>
              </div>
            </div>
          </div>
          <div className="chart-section">
            <div className="overview-section">
              <div className="overview-info">
                <div className="info">
                  <h2>Overview</h2>
                  <p>Monthly Earning</p>
                </div>
                <div className="menu-box">
                  <p>Quarterly</p>
                  <i class="fa-solid fa-angle-down"></i>
                </div>
              </div>
              <div className="bar-box">
                <div className="chart">
                  <div className="bar" style={{ height: "200px" }}></div>
                  <div className="bar" style={{ height: "180px" }}></div>
                  <div
                    className="bar"
                    style={{
                      height: "230px",
                      backgroundColor: "rgb(171, 46, 213)",
                    }}
                  ></div>
                  <div className="bar" style={{ height: "250px" }}></div>
                  <div className="bar" style={{ height: "230px" }}></div>
                  <div className="bar" style={{ height: "300px" }}></div>
                  <div className="bar" style={{ height: "110px" }}></div>
                  <div className="bar" style={{ height: "140px" }}></div>
                  <div className="bar" style={{ height: "200px" }}></div>
                  <div className="bar" style={{ height: "250px" }}></div>
                  <div className="bar" style={{ height: "180px" }}></div>
                  <div className="bar" style={{ height: "150px" }}></div>
                </div>
                <div class="bar-lable-box">
                  <div className="bar-label">Jan</div>
                  <div className="bar-label">Feb</div>
                  <div className="bar-label">Mar</div>
                  <div className="bar-label">Apr</div>
                  <div className="bar-label">May</div>
                  <div className="bar-label">Jun</div>
                  <div className="bar-label">Jul</div>
                  <div className="bar-label">Aug</div>
                  <div className="bar-label">Sep</div>
                  <div className="bar-label">Oct</div>
                  <div className="bar-label">Nov</div>
                  <div className="bar-label">Dec</div>
                </div>
              </div>
            </div>
            <div className="customers-section">
              <h1>Customers</h1>
              <p>Customers that buy product</p>
              <div className="customer-chart">
                <div className="pi-chart">
                  <h2>65%</h2>
                  <h4>Total New</h4>
                  <h4>Customers</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="product-sell-section">
              <div className="top-sell reuse-flex1">
              <h1>Product Sell</h1>
             <div className="reuse-flex2">
             <div className="search-bar" style={{backgroundColor:"rgb(139, 139, 139,0.2)"}}>
             <i class="fa-solid fa-magnifying-glass"></i>
             <input style={{backgroundColor:"transparent"}} type="text" placeholder="search" />
           </div>
           <div className="menu-box">
               <p>Last 30 days</p>
               <i class="fa-solid fa-angle-down"></i>
             </div>
             </div>
              </div>
              <div className="reuse-flex1">
              <p>Product Name</p>
              <div className="reuse-flex2">
              <p>Stock</p>
              <p>Price</p>
              <p>Total Sales</p>
              </div>
              </div>
              <hr />
              <div className="reuse-flex1">
              <div className="product">
              <img src="./img.jpeg" alt="product" />
              <div className="product-info">
              <h3>Abstract 3D</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              </div>
              <div className="reuse-flex2">
              <p>32 in stock</p>
              <p>$45.99</p>
              <p>20</p>
              </div>
              </div>
              <div className="reuse-flex1">
              <div className="product">
              <img src="./img.jpeg" alt="product" />
              <div className="product-info">
              <h3>Sarphens illustration</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              </div>
              <div className="reuse-flex2">
              <p>32 in stock</p>
              <p>$45.99</p>
              <p>20</p>
              </div>
              </div>
              
          </div>
        </div>
      </section>
    </>
  );
};
export default App;
