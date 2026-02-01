interface IMenuButton {
  onClick: () => void;
  isOpen?: boolean;
}

interface ISideMenu {
  onClick: () => void;
  isOpen?: boolean;
}

interface IFeatureCard {
  image: string;
  title: string;
  description: string;
}
