/* eslint-disable no-alert */
import React from 'react';

class DogImage extends React.Component {
  constructor() {
    super();

    this.fetchDogImages = this.fetchDogImages.bind(this);
    this.saveDogData = this.saveDogData.bind(this);

    this.state = {
      hasFetched: false,
      dogImage: '',
      dogName: '',
      dogsArray: [],
    };
  }

  componentDidMount() {
    this.fetchDogImages();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.dogImage.includes('terrier')) {
      return false;
    }
    return true;
  }

  componentDidUpdate(previousProps, previousState) {
    const { dogImage } = this.state;

    if (previousState.dogImage !== dogImage) {
      const dogBreed = dogImage.split('/')[4];
      alert(dogBreed);
    }
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

  saveDogData() {
    const { dogImage, dogName, dogsArray } = this.state;

    const dogData = { dogImage, dogName };
    const newArray = [...dogsArray, dogData];
    this.setState({ dogsArray: newArray });
    this.setState({ dogName: '' });
    localStorage.setItem('namedDogURL', JSON.stringify(newArray));
  }

  render() {
    const { hasFetched, dogImage, dogName } = this.state;

    return (
      <section className="content">
        { hasFetched
          ? <img src={ dogImage } alt="Dog" />
          : <h2>Loading...</h2>}
        <input
          type="text"
          value={ dogName }
          onChange={ (event) => this.setState({ dogName: event.target.value }) }
          placeholder="Type dog name"
        />
        <button type="button" onClick={ this.saveDogData }>
          Save Dog
        </button>
        <button type="button" onClick={ this.fetchDogImages }>
          New Dog
        </button>
      </section>
    );
  }
}

export default DogImage;
