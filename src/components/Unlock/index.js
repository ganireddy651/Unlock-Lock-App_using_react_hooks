import {useState} from 'react'
import {
  BackgroundContainer,
  UnlockImage,
  LockParagraph,
  LockButton,
} from './styledComponents'

const Unlock = () => {
  const [isClicked, setISClicked] = useState(false)

  const onClickToggle = () => {
    setISClicked(prevState => !prevState)
  }

  return (
    <BackgroundContainer>
      {isClicked ? (
        <UnlockImage
          src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
          alt="unlock"
        />
      ) : (
        <UnlockImage
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          alt="lock"
        />
      )}
      {isClicked ? (
        <LockParagraph>Your Device is Unlocked</LockParagraph>
      ) : (
        <LockParagraph>Your Device is Locked</LockParagraph>
      )}
      {isClicked ? (
        <LockButton onClick={onClickToggle}>Lock</LockButton>
      ) : (
        <LockButton onClick={onClickToggle}>Unlock</LockButton>
      )}
    </BackgroundContainer>
  )
}

export default Unlock
