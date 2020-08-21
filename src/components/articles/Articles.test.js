import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import store from "../../store";
import renderer from "react-test-renderer";
import Articles from "./Articles";
Enzyme.configure({ adapter: new Adapter() });

describe("<Articles /> component", () => {
  it("snapshot with articles", () => {
    let testProps = {
      loading: false,
      error: false,
      articles: [
        {
          source: {
            id: "bbc-news",
            name: "BBC News",
          },
          author: "BBC News",
          title: "Big day for Nasa and SpaceX stymied by weather",
          description:
            "An late decision is made to delay to Saturday the first US astronaut launch in the US for nine years.",
          url: "http://www.bbc.co.uk/news/science-environment-52809664",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/F0A3/production/_112530616_janeobrien.jpg",
          publishedAt: "2020-05-27T20:21:15Z",
          content:
            "Image copyrightJane O'Brien/BBCImage caption\r\n Dark, threatening clouds shrouded Kennedy through much of the day\r\nPoor weather has forced SpaceX to call off the launch of Nasa astronauts Doug Hurley … [+1616 chars]",
        },
        {
          source: {
            id: "bbc-news",
            name: "BBC News",
          },
          author: "BBC News",
          title: "HK 'no longer autonomous from China' - Pompeo",
          description:
            "The US secretary of state says the territory no longer merits special treatment under US laws.",
          url: "http://www.bbc.co.uk/news/world-us-canada-52824839",
          urlToImage:
            "https://ichef.bbci.co.uk/images/ic/1024x576/p08f8vsb.jpg",
          publishedAt: "2020-05-27T17:29:47Z",
          content:
            "Media captionPolice arrested dozens of people in Causeway Bay\r\nUS Secretary of State Mike Pompeo has certified to Congress that Hong Kong no longer merits special treatment under US law.\r\nThe declara… [+3967 chars]",
        },
        {
          source: {
            id: "bbc-news",
            name: "BBC News",
          },
          author: "BBC News",
          title: "Playwright and activist Larry Kramer dies",
          description:
            "The author of The Normal Heart was a key and confrontational figure during the 1980s Aids crisis.",
          url: "http://www.bbc.co.uk/news/entertainment-arts-52821957",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/2F14/production/_112525021_kramerget.jpg",
          publishedAt: "2020-05-27T17:13:14Z",
          content:
            "Image copyrightGetty ImagesImage caption\r\n Kramer helped found both Gay Men's Health Crisis and Act Up\r\nUS playwright, author and Aids activist Larry Kramer has died at the age of 84.\r\nKramer wrote t… [+2273 chars]",
        },
        {
          source: {
            id: "bbc-news",
            name: "BBC News",
          },
          author: "BBC News",
          title: "EU's €750bn recovery fund marks 'Europe's moment'",
          description:
            "A giant fund is proposed, some of it raised on capital markets, but several countries express doubts.",
          url: "http://www.bbc.co.uk/news/world-europe-52819126",
          urlToImage:
            "https://ichef.bbci.co.uk/images/ic/1024x576/p08f9r1q.jpg",
          publishedAt: "2020-05-27T16:48:04Z",
          content:
            'Media captionUrsula von der Leyen\'s proposals will have to please "frugal" states as well as the Southern European countries that need the money most\r\nA recovery fund worth 750bn (£670bn; $825bn) has… [+6225 chars]',
        },
        {
          source: {
            id: "bbc-news",
            name: "BBC News",
          },
          author: "BBC News",
          title: "Trump threatens to shut down social media firms",
          description:
            'The president claims Twitter is "stifling free speech", after it added fact-check links to his posts.',
          url: "http://www.bbc.co.uk/news/technology-52821304",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/68EE/production/_112526862_trump2.jpg",
          publishedAt: "2020-05-27T15:40:31Z",
          content:
            "Image copyrightGetty Images\r\nPresident Trump has taken the extraordinary step of threatening to close down social media platforms.\r\nThe threat came after Twitter added fact-check links to his tweets … [+4066 chars]",
        },
        {
          source: {
            id: "bbc-news",
            name: "BBC News",
          },
          author: "BBC News",
          title: "Key decision expected in Meng Wanzhou case",
          description:
            'A Canadian court will decide whether the Huawei executive\'s case counts as "double criminality".',
          url: "http://www.bbc.co.uk/news/world-us-canada-52793343",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/4FF7/production/_112517402_hi061578069.jpg",
          publishedAt: "2020-05-27T15:22:59Z",
          content:
            "Image copyrightReutersImage caption\r\n Huawei's Meng Wanzhou has been living in Canada under house arrest\r\nA Canadian court is set to issue a key judgment in the case of a senior Huawei executive figh… [+3769 chars]",
        },
        {
          source: {
            id: "bbc-news",
            name: "BBC News",
          },
          author: "BBC News",
          title: "Outrage in Iran over 'honour killing' of girl",
          description:
            "Romina Ashrafi, 14, was allegedly killed by her father after she ran away with her older boyfriend.",
          url: "http://www.bbc.co.uk/news/world-middle-east-52811631",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/9B3C/production/_112504793_mediaitem112504790.jpg",
          publishedAt: "2020-05-27T10:18:04Z",
          content:
            "Image copyrightTwitterImage caption\r\n Romina Ashrafi reportedly told police that she feared for her life if forced to return home\r\nPolice in northern Iran have arrested a man accused of murdering his… [+2439 chars]",
        },
        {
          source: {
            id: "bbc-news",
            name: "BBC News",
          },
          author: "BBC News",
          title: "Nasa SpaceX set for historic launch from Florida",
          description:
            "SpaceX will launch Nasa astronauts for the first time on its Crew Dragon spacecraft.",
          url: "http://www.bbc.co.uk/news/live/science-environment-52790778",
          urlToImage:
            "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/4.1.2/bbc_news_logo.png",
          publishedAt: "2020-05-27T08:52:26.2965864Z",
          content:
            "Welcome to the BBC's live coverage of the first space launch with astronauts from US soil in nine years. At 16:33 EDT (20:33 GMT; 21:33 BST). Nasa crew members Doug Hurley and Bob Behnken will lift o… [+718 chars]",
        },
        {
          source: {
            id: "bbc-news",
            name: "BBC News",
          },
          author: "BBC News",
          title: "Death of US black man in custody sparks clashes",
          description:
            "Tear gas is fired at protesters angry at the death of a man pinned down by a policeman in Minnesota.",
          url: "http://www.bbc.co.uk/news/world-us-canada-52817097",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/F48A/production/_112520626_mediaitem112520623.jpg",
          publishedAt: "2020-05-27T08:14:42Z",
          content:
            "Image copyrightGetty ImagesImage caption\r\n Protesters marched on the precinct where the officers were thought to have worked\r\nThere have been violent clashes between police and protesters in the US c… [+5147 chars]",
        },
        {
          source: {
            id: "bbc-news",
            name: "BBC News",
          },
          author: "BBC News",
          title: "A drive-in concert in an airport car park",
          description:
            "Mads Langer performs a drive-in concert for music fans in Copenhagen while social distancing.",
          url: "http://www.bbc.co.uk/news/business-52807756",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/DA82/production/_112483955_p08f5z2x.jpg",
          publishedAt: "2020-05-26T23:10:48Z",
          content: null,
        },
      ],
    };
    const tree = renderer
      .create(
        <Provider store={store}>
          <Articles {...testProps} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("snapshot with loading", () => {
    let testProps = {
      loading: true,
    };
    const tree = renderer
      .create(
        <Provider store={store}>
          <Articles {...testProps} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("snapshot with error", () => {
    let testProps = {
      error: true,
    };
    const tree = renderer
      .create(
        <Provider store={store}>
          <Articles {...testProps} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
