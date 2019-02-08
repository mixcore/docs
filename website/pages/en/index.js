/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;
const Showcase = require(`${process.cwd()}/core/Showcase.js`);
const translate = require('../../server/translate.js').translate;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language} = this.props;

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">
            <div className="projectLogo">
              <img
                src={`${siteConfig.baseUrl}img/445821-PF5LWD-853.svg`}
                alt="Docusaurus with Keytar"
              />
            </div>
            <div className="inner">
              <h1 className="projectTitle">
              <translate>Open Source .NET Core CMS</translate>
                <small><translate>Mixcore is an unobtrusive ASP.NET Core CMS focused .NET lovers and user-friendly content management.</translate></small>
              </h1>
              <div className="section promoSection">
                <div className="promoRow">
                  <div className="pluginRowBlock">
                    <Button
                      href={`
                        ${siteConfig.baseUrl}docs/${language}/intro
                        `}>
                      <translate>Get Started</translate>
                    </Button>
                    <Button href="https://github.com/mixcore/mix.core">
                      <translate>GitHub</translate>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = 'en'} = this.props;
    const pinnedUsersToShowcase = siteConfig.users.filter(user => user.pinned);

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Container padding={['bottom', 'top']} background="light">
            <GridBlock
              align="center"
              contents={[
                {
                  content: `Built for NetStandard and AspNet Core, Piranha CMS can be run on Windows, Linux and Mac OS X.`,
                  image: `${siteConfig.baseUrl}img/cross-platform.png`,
                  imageAlign: 'top',
                  imageAlt: 'Cross Platform',
                  title: <translate>Cross Platform</translate>,
                },
                {
                  content: `Designed from the ground up for super-fast performance using EF Core and optional Caching.`,
                  image: `${siteConfig.baseUrl}img/stopwatch.png`,
                  imageAlign: 'top',
                  imageAlt: 'Super Fast',
                  title: <translate>Super Fast</translate>,
                },
                {
                  content: `Everything is Open Source and released under the GPL-3.0 license for maximum flexibility.`,
                  image: `${siteConfig.baseUrl}img/github.png`,
                  imageAlign: 'top',
                  imageAlt: 'Open Source',
                  title: <translate>Open Source</translate>,
                },
              ]}
              layout="threeColumn"
            />
            <br />
          </Container>
          <Container padding={['bottom', 'top']}>
            <GridBlock
              contents={[
                {
                  content: `Get [up and running](${siteConfig.baseUrl}docs/${
                    this.props.language
                  }/intro#build-run)
                    quickly without having to worry about site design.`,
                  imageAlign: 'right',
                  image: `${siteConfig.baseUrl}img/ui-design.png`,
                  imageAlt: 'Docusaurus on a Scooter',
                  title: <translate>Quick Setup</translate>,
                },
              ]}
              layout="twoColumn"
            />
          </Container>
          <Container padding={['bottom', 'top']} background="light">
            <GridBlock
              contents={[
                {
                  content: `Make design and documentation changes by using the included
                    [live server](${siteConfig.baseUrl}docs/${
                    this.props.language
                  }/site-preparation#verifying-installation).
                    [Publish](${siteConfig.baseUrl}docs/${
                    this.props.language
                  }/publishing)
                    your site to GitHub pages or other static file hosts
                    manually, using a script, or with continuous integration
                    like CircleCI.`,
                  imageAlign: 'left',
                  image: `${siteConfig.baseUrl}img/develop.png`,
                  imageAlt: 'Docusaurus Demo',
                  title: <translate>Develop and Deploy</translate>,
                },
              ]}
              layout="twoColumn"
            />
          </Container>
          <Container padding={['bottom', 'top']}>
            <GridBlock
              contents={[
                {
                  content: `Docusaurus currently provides support to help your website
                    use [translations](${siteConfig.baseUrl}docs/${
                    this.props.language
                  }/translation),
                    [search](${siteConfig.baseUrl}docs/${
                    this.props.language
                  }/search),
                    and [versioning](${siteConfig.baseUrl}docs/${
                    this.props.language
                  }/versioning),
                    along with some other special [documentation markdown features](${
                      siteConfig.baseUrl
                    }docs/${this.props.language}/doc-markdown).
                    If you have ideas for useful features, feel free to
                    contribute on [GitHub](https://github.com/facebook/docusaurus)!`,
                  imageAlign: 'right',
                  image: `${siteConfig.baseUrl}img/website-funcs.png`,
                  imageAlt: 'Monochromatic Docusaurus',
                  title: <translate>Website Features</translate>,
                },
              ]}
              layout="twoColumn"
            />
          </Container>
                    
        </div>
      </div>
    );
  }
}

module.exports = Index;