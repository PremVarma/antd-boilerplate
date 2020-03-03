import React, { Fragment } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { Row, Col } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeaderone, PageHeaderTwo, PageHeaderThree } from '../../components/page-headers/page-headers';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];
const Page_Headers = () => {
  return (
    <Fragment>
      <PageHeader title="Page Headers" />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <Cards headless title="Basic header" caption="The simplest use of Page header">
              <PageHeaderone title="Title" subTitle="This is a subtitle" />
            </Cards>
          </Col>
          <Col md={24}>
            <Cards headless title="Custom header" caption="The simplest use of Page header">
              <PageHeader title="Title" subTitle="This is a subtitle" />
            </Cards>
          </Col>
          <Col md={24}>
            <Cards headless title="Breadcrumb header" caption="The simplest use of Breadcrumb header">
              <PageHeaderTwo title="Title" subTitle="This is a subtitle" routes={routes} />
            </Cards>
          </Col>
          <Col md={24}>
            <Cards headless title="Extra content header" caption="The simplest use of Extra content header">
              <PageHeaderThree title="Title" subTitle="This is a subtitle" routes={routes} />
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Page_Headers;
