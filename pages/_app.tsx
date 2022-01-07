import Header from "./header"
import Sightseen from "./sightseen"
import Tours from "./tours"
import Welcome from "./welcome"
import Contacts from "./contacts"
import Footer from "./footer"
import '../styles/style.scss'
import 'normalize.css/normalize.css';


export default function App(){
    const toursData = [
        {
          title: 'Название', 
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.',
          tourId: 'tour1',
          cost: '10 000'
        },
        {
          title: 'Название', 
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.',
          tourId: 'tour2',
          cost: '10 000'
        },
        {
          title: 'Название', 
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.',
          tourId: 'tour3',
          cost: '10 000'
        },
        {
          title: 'Название', 
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.',
          tourId: 'tour4',
          cost: '10 000'
        },
        {
          title: 'Название', 
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.',
          tourId: 'tour5',
          cost: '10 000'
        },
        {
          title: 'Название', 
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.',
          tourId: 'tour6',
          cost: '10 000'
        }
      ]
      const sightseenData = [
        {
          title: 'Тропа предков', 
          description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque. Vivamus id nunc at ante vulputate egestas. Sed varius elit ornare condimentum fermentum. Integer mattis pretium tortor dictum tristique. Donec in congue mauris. Quisque vitae nisi ultricies, efficitur odio vel, porta nulla. Donec porta, mauris nec pharetra mollis, diam lorem luctus velit, nec ultricies nunc quam posuere dui. Donec at nisl lorem. Sed vitae sapien metus. In erat felis, pharetra vitae libero eu, posuere accumsan odio.',
          description2: 'Fusce eget mauris ullamcorper mi fermentum ullamcorper. Donec egestas mollis dolor, a dignissim dolor venenatis eu. Suspendisse quis quam laoreet, mattis neque eu, feugiat lectus. Maecenas non urna mollis, ultricies eros vel, ullamcorper risus. Nulla hendrerit venenatis erat, in rhoncus quam placerat nec. Ut feugiat nisi in mattis lacinia. Morbi eleifend, neque eget dapibus scelerisque, ligula nisl malesuada odio, et imperdiet metus mi pretium enim.',
          image: '/img/DJI_0185-Pano_1.jpg',
          sightId: 'sightseen1',
          infoId: 'info1'
        },
        {
          title: 'Приисковый', 
          description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque. Vivamus id nunc at ante vulputate egestas. Sed varius elit ornare condimentum fermentum. Integer mattis pretium tortor dictum tristique. Donec in congue mauris. Quisque vitae nisi ultricies, efficitur odio vel, porta nulla. Donec porta, mauris nec pharetra mollis, diam lorem luctus velit, nec ultricies nunc quam posuere dui. Donec at nisl lorem. Sed vitae sapien metus. In erat felis, pharetra vitae libero eu, posuere accumsan odio.',
          description2: 'Fusce eget mauris ullamcorper mi fermentum ullamcorper. Donec egestas mollis dolor, a dignissim dolor venenatis eu. Suspendisse quis quam laoreet, mattis neque eu, feugiat lectus. Maecenas non urna mollis, ultricies eros vel, ullamcorper risus. Nulla hendrerit venenatis erat, in rhoncus quam placerat nec. Ut feugiat nisi in mattis lacinia. Morbi eleifend, neque eget dapibus scelerisque, ligula nisl malesuada odio, et imperdiet metus mi pretium enim.',
          image: '/img/DJI_0185-Pano_1.jpg',
          sightId: 'sightseen2',
          infoId: 'info2'
        },
        {
          title: 'Сундуки', 
          description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque. Vivamus id nunc at ante vulputate egestas. Sed varius elit ornare condimentum fermentum. Integer mattis pretium tortor dictum tristique. Donec in congue mauris. Quisque vitae nisi ultricies, efficitur odio vel, porta nulla. Donec porta, mauris nec pharetra mollis, diam lorem luctus velit, nec ultricies nunc quam posuere dui. Donec at nisl lorem. Sed vitae sapien metus. In erat felis, pharetra vitae libero eu, posuere accumsan odio.',
          description2: 'Fusce eget mauris ullamcorper mi fermentum ullamcorper. Donec egestas mollis dolor, a dignissim dolor venenatis eu. Suspendisse quis quam laoreet, mattis neque eu, feugiat lectus. Maecenas non urna mollis, ultricies eros vel, ullamcorper risus. Nulla hendrerit venenatis erat, in rhoncus quam placerat nec. Ut feugiat nisi in mattis lacinia. Morbi eleifend, neque eget dapibus scelerisque, ligula nisl malesuada odio, et imperdiet metus mi pretium enim.',
          image: '/img/DJI_0185-Pano_1.jpg',
          sightId: 'sightseen3',
          infoId: 'info3'
        }
      ]
    return (
        <div className="app">
            <Header />
            <Welcome />
            <Sightseen sightseenData={sightseenData} />
            <Tours toursData={toursData} />
            <Contacts />
            <Footer />
        </div>
        )
}