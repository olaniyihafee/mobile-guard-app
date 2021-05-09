import { StyleSheet } from 'react-native'

export const PRIMARY_COLOR = `#FFFFFF`
export const SECONDARY_COLOR = `#FFA500`

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
  SectionStyleColumn: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
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
