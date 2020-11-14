import React from 'react';
import logo from './logo.svg';
import mockup from './assets/images/image-mockups.png';
import background from './assets/images/bg-intro-desktop.svg';
import iconAPI from './assets/images/icon-api.svg';
import iconBudgeting from './assets/images/icon-budgeting.svg';
import iconOnboarding from './assets/images/icon-onboarding.svg';
import iconOnline from './assets/images/icon-online.svg';

import imageCurrency from './assets/images/image-currency.jpg';
import imageRestaurant from './assets/images/image-restaurant.jpg';
import imagePlane from './assets/images/image-plane.jpg';
import imageConfetti from './assets/images/image-confetti.jpg';

import './App.css';
import { Layout } from './components/Layout';
import { Button } from './components/Button';
import { Feature } from './components/Feature';
import { Article } from './components/Article';
import { FeatureItem, ArticleItem } from './interfaces/global';



/**
 * Fetured Items
 */
const features: Array<FeatureItem> =[
  {icon: iconAPI , title:'Online banking' , text:'Our modern web and mobile   application allow you to keep track of your finances wherever you  are in the world.'},
  {icon: iconBudgeting , title:'Simple Budgeting' , text:'See exactly where your money goes each month. Receive  notifications when you\'re close to hitting your limits.'},
  {icon: iconOnboarding , title:'Fast Onboarding' , text:'We don\'t do branches. Open your account in minutes online and start taking control of your finances right away.'},
  {icon: iconOnline , title:'Open API' , text:'Manage your savings, investments pension, and much more from one account. Tracking your money has never been easier.'},
];


/**
 * Articles
 */
const articles: Array<ArticleItem> =[
  {image: imageCurrency , author : 'By Claire Robinson', title:'Receive money in any currency with no fees' , text:'The world is getting smaller and we\'re becoming more mobile. So why should you be forced to only receive money in a single...'},
  {image: imageRestaurant , author : 'By Wilson Hutton', title:'Treat yourself without worying about money' , text:'Our simple budgeting feature allows you to separate out ryour spending and set realistic limits each month. That means you...'},
  {image: imagePlane , author : 'By Wilson Hutton', title:'Take your easybank card wherever you go' , text:'We want you to enjoy your travels. This is why we don\'t charge any fees on purchases while you\'re aborad. We\'ll even show you...'},
  {image: imageConfetti , author : 'By Claire Robinson', title:'Our invite-only Beta accounts are now live!' , text:'After a lot of hard work by the whole team, we\'re excited to launch our closeed beta. It\'s easy to request an invite through the site...'},
];


/**
 * Home Page
 */
function App() {
  return (
    <Layout>
      <section id='hero'>
        <div>
          <h1>
            Next generation <br />
            digital banking
          </h1>
          <p>
            Take your financial life online. Your Easybank account <br/>
            will be a  one-stop-shop for spending,  <br/> 
            saving budgeting,and much more
          </p>
          <img className='background' src={background} alt="" />
          <img className='mockup' src={mockup} alt="" />
        </div>
        <div><Button text='Request Invite' type='button' clicked={()=>false} /></div>
      </section>
      <section id="choose">
        <h2>Why choose Easybank?</h2>
        <p>We leverage Open Banking to turn your bank account into your financial hub. <br/>
        Control your finance like never before.
        </p>
        <div id='feature-list'>
          {features.map((feature) =>(
            <Feature image={feature.icon} title={feature.title}>
              {feature.text}
            </Feature>
          ))}
        </div>
      </section>
      <section id="articles">
      <h2>Latest Articles</h2>
      <div id='article-list'>
          {articles.map((article) =>(
            <Article image={article.image} author={article.author} title={article.title}>
              {article.text}
            </Article>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default App;
