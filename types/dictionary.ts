export type Dictionary = {
  about: {
    welcome: {
      title: string;
      description: string;
    };
  };
  home: {
    hero: {
      slogan: string;
      description: string;
    };
    weMakeBannetons: {
      title: string;
      description: string;
    };
    ourProducts: {
      title: string;
      products: {
        rattan: {
          title: string;
          description: string;
        };
        cork: {
          title: string;
          description: string;
        };
        bamboo: {
          title: string;
          description: string;
        };
        platic: {
          title: string;
          description: string;
        };
        engraved: {
          title: string;
          description: string;
        };
        liners: {
          title: string;
          description: string;
        };
      };
    };
    benefits: {
      title: string;
      sections: {
        eco: {
          title: string;
          description: string;
        };
        easy: {
          title: string;
          description: string;
        };
        shape: {
          title: string;
          description: string;
        };
        handmade: {
          title: string;
          description: string;
        };
      };
    };
    uniqueBasket: {
      title: string;
      description: string;
    };
    bestSellers: {
      title: string;
      bestSellerBadge: string;
    };
    materials: {
      title: string;
      sections: {
        sgh: {
          title: string;
          description: string;
          regulations: string[];
        };
        natural: {
          title: string;
          description: string;
          description1: string;
        };
      };
    };
    corkBaskets: {
      title: string;
      description: string;
    };
    customerFeedback: {
      title: string;
    };
    familyCompany: {
      title: string;
      description: string;
      imageCaption: string;
    };
    faq: {
      title: string;
      questions: {
        question: string;
        answer: string;
      }[];
    };
  };
  questionsBox: {
    title: string;
    contactUs: string;
    description: string;
  };
  buttons: {
    viewCatalog: string;
    leaveRequest: string;
    priceButton: string;
    orderUniqueBasket: string;
    buyRattanBaskets: string;
    buyCorkBaskets: string;
    downloadCertificate: string;
    viewMore: string;
    viewLess: string;
    moreAboutUs: string;
  };
  footer: {
    headings: {
      shop: string;
      info: string;
      office: string;
    };
    links: {
      shop: {
        text: string;
        href: string;
      }[];
      info: {
        text: string;
        href: string;
      }[];
    };
    office: {
      line1: string;
      line2: string;
      line3: string;
      line4: string;
      line5: string;
    };
    bottom: {
      copyright: string;
      privacy: {
        text: string;
        href: string;
      };
      legal: {
        text: string;
        href: string;
      };
    };
  };
};
