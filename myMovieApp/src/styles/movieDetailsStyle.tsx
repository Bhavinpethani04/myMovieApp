import {StyleSheet, Dimensions} from 'react-native';
const SCREEN_HIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export const movieDetailsStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
  movieTitleView: {
    width: SCREEN_WIDTH,
    height: SCREEN_HIGHT / 12,
    backgroundColor: '#795548',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 15,
  },
  movieTitleText: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 20,
  },
  moviePosterImageRatingInfoView: {
    width: SCREEN_WIDTH - 40,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  posterImage: {
    width: SCREEN_WIDTH / 3,
    height: SCREEN_WIDTH / 2,
  },
  ratingReleaseDateInfoView: {
    flexDirection: 'column',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
    height: SCREEN_WIDTH / 2,
    paddingLeft: 20,
  },
  movieInfoText: {
    width: SCREEN_WIDTH - 40,
    marginTop: 20,
  },
});
