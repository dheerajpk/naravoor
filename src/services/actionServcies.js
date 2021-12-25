export const getActionOptions = () => {
  return [
    {
      id: "places",
      name: "Places",
      href: "#"
    },
    {
      id: "around",
      name: "Around you",
      href: "#"
    },
    {
      id: "services",
      name: "Find services",
      href: "#"
    }
  ];
};

export const getPlaceToVisitGallery = () => {
  return [
    {
      img: "../p-natural.jpg",
      title: "Naravoor Para",
      subTitle: "Rock mining filled water"
    },
    {
      img: "../p-temple.jpg",
      title: "Vishnu Temple",
      subTitle: "Naravoor MahaVishnu Temple"
    },
    {
      img: "../p-farming.jpg",
      title: "Farming",
      subTitle: "Pepper farming"
    }
  ];
};

export const getUseFullServicesTags = () => {
  return [
    {
      id: "library",
      title: "Library",
      icon: "LIBRARY",
      color: "#fff"
    },
    {
      id: "shops",
      title: "Shops",
      icon: "SHOPS",
      color: "#fff"
    },
    {
      id: "schools",
      title: "Schools",
      icon: "SCHOOLS",
      color: "#fff"
    },
    {
      id: "taxi",
      title: "Taxi",
      icon: "TAXI",
      color: "#fff"
    },
    {
      id: "electrican",
      title: "Electrican & Plumber",
      icon: "ELECTRICAN",
      color: "#fff"
    }
  ];
};

export const getEvents = (type) => {
  return [
    {
      id: "1",
      type: "EVENT",
      date: new Date(),
      title: "Junior chess competion",
      description: "Naravvor youth club conducting chess competion for juniors",
      contact: "+911234567890"
    },
    {
      id: "2",
      type: "EVENT",
      date: new Date(),
      title: "Junior drawing competion",
      description:
        "Naravvor youth club conducting drawing competion for juniors",
      contact: "+911234567890"
    },
    {
      id: "3",
      type: "NEWS",
      date: new Date(),
      title: "Annual library meeting",
      description: "Naravvor youth club conducting annual library meeting",
      contact: "+911234567890"
    },
    {
      id: "4",
      type: "NEWS",
      date: new Date(),
      title: "Naravoor school admission open",
      description: "Naravoor LP school adimission soon starts",
      contact: "+911234567890"
    }
  ].filter((x) => x.type === type);
};
