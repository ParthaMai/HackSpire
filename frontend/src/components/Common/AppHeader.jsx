import { Navbar, Nav, NavDropdown, Button, Collapse } from 'react-bootstrap';
import { LiaShoppingCartSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';

const AppHeader = ({ cart }) => {

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <header className="site-header">
      <Navbar expand="lg" className="navbar navbar-default theme-bg mar0 home-bg">
        <div className="container-fluid">
          
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <div class="col-md-2 hidden-sm hidden-xs"></div>
            <Nav className="mx-auto d-flex justify-content-center">
              <Nav.Link href="#">Home</Nav.Link>
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="collection.html">Collection</NavDropdown.Item>
              </NavDropdown>
              <Navbar.Brand href="/">
                <img src="/assets/images/logo.png" alt="Site Logo" className="site_logo" />
              </Navbar.Brand>
              <Nav.Link href="#"></Nav.Link>
              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="about">About Us</NavDropdown.Item>
                <NavDropdown.Item href="faq.html">FAQs</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="contact.html">Contact</Nav.Link>
            </Nav>
            <div class="col-md-2 hidden-sm hidden-xs">
              <ul class="top-ico">
                <li class="table-hover">
                  <div className="ml-auto">
                    <Button variant="link" className="top-ico">
                        <LiaShoppingCartSolid/>
                        <sub className="down">{cartItemCount}</sub>
                    </Button>
                  </div>
                  <div class="home-table">
                    {/* <div class="col-md-12 col-sm-12 col-xs-12">
                      <div class="row">
                        <div class="cart-table home-cart">
                          <div class="col-md-2 col-sm-2 col-xs-12">
                            <div class="row">
                              <figure>
                                <img src="assets/images/product14.jpg" alt=""/>
                              </figure>
                            </div>
                          </div>
                          <div class="col-md-8 col-sm-3 col-xs-12">
                            <div class="row">
                              <a href="#">Le Parc Minotti Chair</a>
                              <h5>$169.00</h5>
                            </div>
                          </div>
                          <div class="col-md-2 col-sm-2 col-xs-12">
                            <div class="row">
                              <a href="#">
                                <i class="fa fa-times" aria-hidden="true"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <div class="row">
                        <div class="cart-table home-cart">
                          <div class="col-md-2 col-sm-2 col-xs-12">
                            <div class="row">
                              <figure>
                                <img src="assets/images/product14.jpg" alt=""/>
                              </figure>
                            </div>
                          </div>
                          <div class="col-md-8 col-sm-3 col-xs-12">
                            <div class="row">
                              <a href="#">Le Parc Minotti Chair</a>
                              <h5>$169.00</h5>
                            </div>
                          </div>
                          <div class="col-md-2 col-sm-2 col-xs-12">
                            <div class="row">
                              <a href="#">
                                <i class="fa fa-times" aria-hidden="true"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {cart.map(item => (
                            <div className="cart-table home-cart" key={item.id}>
                                <div className="col-md-2 col-sm-2 col-xs-12">
                                    <div className="row">
                                        <figure>
                                            <img src={item.image} alt={item.name} />
                                        </figure>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-3 col-xs-12">
                                    <div className="row">
                                        <a href="#">{item.name}</a>
                                        <h5>${item.price.toFixed(2)}</h5>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-2 col-xs-12">
                                    <div className="row">
                                        <a href="#">
                                            <i className="fa fa-times" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    <div class="cart-wid home-wid">
                      <a href="#" class="shop-cart-btn">view cart</a>
                      <a href="#" class="shop-cart-btn">checkout</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default AppHeader;