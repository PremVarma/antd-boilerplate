import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Row, Col, Table } from 'antd';
import { Cards } from '../../components/cards/frame/cards-frame';
import Heading from '../../components/heading/heading';
import { Button } from '../../components/buttons/buttons';
import { InvoiceHeader, InvoiceLetterBox,InvoiceAction, ProductTable, OrderSummary } from './Style';
import FeatherIcon from 'feather-icons-react';

const Invoice = () => {
  const dataSource = [
    {
      key: '1',
      row: '1',
      details: (
        <Fragment>
          <div className="product-info">
            <Heading className="product-info" as="h6">Fiber Base Chair</Heading>
            <ul className="info-list">
              <li>
                <span className="info-title">Size :</span>
                <span>Large</span>
              </li>
              <li>
                <span className="info-title"> Color :</span>
                <span>Brown</span>
              </li>
            </ul>
          </div>
        </Fragment>
      ),
      unit: (
        <span className="product-unit">$248.66</span>
      ),
      quantity: (
        <span className="product-quantity">3</span>
      ),
      total: (
        <span className="product-total-price">$943.30</span>
      ),
    },
    {
      key: '2',
      row: '2',
      details: (
        <Fragment>
          <Heading className="product-info" as="h6">Panton Tunior Chair</Heading>
          <ul className="info-list">
            <li>
              <span className="info-title">Size :</span>
              <span>Large</span>
            </li>
            <li>
              <span className="info-title"> Color :</span>
              <span>Brown</span>
            </li>
          </ul>
        </Fragment>
      ),
      unit: (
        <span className="product-unit">$248.66</span>
      ),
      quantity: (
        <span className="product-quantity">2</span>
      ),
      total: (
        <span className="product-total-price">$943.30</span>
      ),
    },
  ];

  const columns = [
    {
      title: '#',
      dataIndex: 'row',
      key: 'row',
    },
    {
      title: 'Product Details',
      dataIndex: 'details',
      key: 'details',
    },
    {
      title: 'Price Per Unit',
      dataIndex: 'unit',
      key: 'unit',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Order Total',
      dataIndex: 'total',
      key: 'total',
    },
  ];

  return (
    <Fragment>
      <PageHeader ghost title="Invoice" />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <Cards headless>
              <InvoiceHeader>
                <Row style={{alignItems: 'center'}}>
                  <Col xs={12}>
                    <figure>
                      <img src={require('../../static/img/logo.png')} alt="logo" />
                    </figure>
                  </Col>
                  <Col xs={12}>
                    <div>
                      <address className="invoice-info" style={{ textAlign: 'right' }}>
                        Admin Company <br />
                        795 Folsom Ave, Suite 600 <br />
                        San Francisco, CA 94107, USA <br />
                        Reg. number : 245000003513
                      </address>
                    </div>
                  </Col>
                </Row>
              </InvoiceHeader>
              <InvoiceLetterBox>
                <div style={{ background: '#F8F9FB', padding: '30px 50px 25px', borderRadius: '20px' }}>
                  <Row>
                    <Col sm={8}>
                      <article className="invoice-author">
                        <Heading className="invoice-author__title" as="h3">Invoice</Heading>
                        <p>No : #642678</p>
                        <p>Date : Jan 17, 2020</p>
                      </article>
                    </Col>
                    <Col sm={8}>
                      <div className="invoice-barcode">
                        <Cards headless>
                            <img style={{ width: '100%' }} src={require('../../static/img/barcode.png')} alt="barcode" />
                            <p>8364297359912267</p>
                        </Cards>
                      </div>
                    </Col>
                    <Col sm={8}>
                      <address className="invoice-customer">
                        <Heading className="invoice-customer__title" as="h5">Invoice To:</Heading>
                        <p>
                          Stanley Jones <br />
                          795 Folsom Ave, Suite 600 <br />
                          San Francisco, CA 94107, USA
                        </p>
                      </address>
                    </Col>
                  </Row>
                </div>
              </InvoiceLetterBox>
              
              <br />
              <br />
              <ProductTable>

                <div className="table-invoice">
                  <Table dataSource={dataSource} columns={columns} pagination={false} />
                </div>

              </ProductTable>
              
              <Row>
                <Col md={4} offset={20}>
                  <OrderSummary>
                    <div className="invoice-summary-inner">
                      <ul className="summary-list">
                        <li>
                          <span className="summary-list-title">Subtotal :</span>
                          <span className="summary-list-text">{'$' + 497.32}</span>
                        </li>
                        <li>
                          <span className="summary-list-title">Descount :</span>
                          <span className="summary-list-text">{'$' + -20}</span>
                        </li>
                        <li>
                          <span className="summary-list-title">Shipping Charge :</span>
                          <span className="summary-list-text">{'$' + 30}</span>
                        </li>
                      </ul>
                      <Heading className="summary-total" as="h4">
                        <span className="summary-total-label">Total : </span>
                        <span className="summary-total-amount">{'$' + 507.32}</span>
                      </Heading>
                    </div>
                  </OrderSummary>
                </Col>
              </Row>
              <Row>
                <Col md={8} offset={16}>
                  <InvoiceAction>
                    <Button size="small" shape="round" type="default">
                      <FeatherIcon icon="printer" size={14} />
                      Print
                    </Button>
                    <Button size="small" shape="round" type="default">
                      <FeatherIcon icon="send" size={14} />
                      Send Invoice
                    </Button>
                    <Button size="small" shape="round" type="primary">
                      <FeatherIcon icon="download" size={14} />
                      Download
                    </Button>
                  </InvoiceAction>
                </Col>
              </Row>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Invoice;
