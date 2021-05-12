/* eslint-disable no-alert */
import React from 'react';

class DogImage extends React.Component {
  constructor() {
    super();

    this.fetchDogImages = this.fetchDogImages.bind(this);

    this.state = {
      hasFetched: false,
      dogImage: '',
    };
  }

  componentDidMount() {
    this.fetchDogImages();
  }

  shouldComponentUpdate(nextState) {
    if (nextState.dogImage.includes('terrier')) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    const { dogImage } = this.state;

    localStorage.setItem('dogImage', dogImage);
    const dogBreed = dogImage.split('/')[4];

    return alert(dogBreed);
  }

  async fetchDogImages() {
    this.setState((previousState) => ({
      ...previousState,
      hasFetched: false,
    }));
    const ENDPOINT = 'https://dog.ceo/api/breeds/image/random';

    try {
      const response = await fetch(ENDPOINT).then((result) => result.json());

      this.setState({
        hasFetched: true,
        dogImage: response.message,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    const { hasFetched, dogImage } = this.state;

    return (
      <section className="content">
        { hasFetched
          ? <img src={ dogImage } alt="Dog" />
          : <h2>Loading...</h2>}
        <button type="button" onClick={ this.fetchDogImages }>
          New Dog
        </button>
      </section>
    );
  }
}

export default DogImage;
