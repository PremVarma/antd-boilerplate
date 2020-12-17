import React from 'react';
import { Form, Input, Select, Button } from 'antd';
import { Link } from 'react-router-dom';
import { KnowledgebaseArticleWrap, ArticleTabWrap } from '../../style';

const KnowledgebaseArticle = () => {
  // const { path } = match;
  //   console.log(path);
  return (
    <KnowledgebaseArticleWrap>
      <ArticleTabWrap className="sDash_article-tab">
        <div className="sDash_article-tab__menu">
          <p>lorem</p>
        </div>
      </ArticleTabWrap>
    </KnowledgebaseArticleWrap>
  );
};

export default KnowledgebaseArticle;
