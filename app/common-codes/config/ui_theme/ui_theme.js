import { StyleSheet } from 'react-native'

export const PRIMARY_COLOR = `#FFFFFF` //white
export const SECONDARY_COLOR = `#FFA500` //orange

export const ui_theme = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    alignContent: 'center',
  },
  SectionStyleRow: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  SectionStyleRowEvenlySpaced: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  SectionStyleColumn: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },  
  SectionStyleCentered: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },  
  SectionFloatRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 10,
  }, 
  Heading: {
    fontSize: 40,
    fontWeight: 300,
    margin: 10,
  },
  SubHeading: {
    fontSize: 30,
    fontWeight: 600,
    margin: 7,
  },
  SmallSubHeading: {
    fontSize: 25,
    fontWeight: 500,
    margin: 7,
  },
  Paragraph: {
    fontSize: 15,
    textAlign: 'center',
    marginLeft: '20%',
    marginRight: '20%',
  },
  Span: {
    fontSize: 15,
    textAlign: 'center',
  },
  SmallSpan: {
    fontSize: 8,
    fontColor: 'grey',
    textAlign: 'center',
  },
  inputStyle: {
    width: '90%',
    height: '40px',
    marginBottom: 40,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  demoImage: {
    width: '100%',
    height: '200px',
    backgroundColor: 'green'
  },
  demoImageSmall: {
    width: '100px',
    height: '200px',
    backgroundColor: 'green'
  },
  p_buttonStyle: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    color: '#FFA500',
    borderColor: '#FFA500',
    height: 40,
    width: 90,
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  s_buttonStyle: {
    backgroundColor: '#FFA500',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,    
    width: 90,
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  p_buttonTextStyle: {
    color: '#FFA500',
    paddingVertical: 10,
    fontSize: 16,
  },
  s_buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
})
