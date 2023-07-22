import {StyleSheet, Dimensions} from 'react-native';
const SCREEN_HIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
import {colour, fontSizes} from '../utils/theam';

export const movieDetailsStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
  movieTitleView: {
    width: SCREEN_WIDTH,
    height: SCREEN_HIGHT / 12,
    backgroundColor: colour.primary,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 15,
  },
  movieTitleText: {
    fontWeight: 'bold',
    color: colour.white,
    fontSize: fontSizes.l,
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
    justifyContent: 'flex-start',
    height: SCREEN_WIDTH / 2,
    paddingLeft: 20,
  },
  movieInfoText: {
    width: SCREEN_WIDTH - 40,
    marginTop: 20,
    color: colour.contectText,
    fontSize: fontSizes.s,
  },

  dateTextStyle: {
    fontSize: fontSizes.m,
    color: colour.primary,
    fontWeight: '500',
  },
  ratingTextStyle: {
    fontSize: fontSizes.m,
    color: colour.black,
    fontWeight: '500',
    marginTop: 10,
  },
});
