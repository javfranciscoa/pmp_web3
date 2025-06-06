import styled from 'styled-components';

export const HeroContainer = styled.div`
  background: #0c0c0c; /* Fallback if video doesn't load */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 70vh; /* Full viewport height */
  position: relative;
  z-index: 1;

  :before { /* Optional overlay for better text readability */
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
                linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34; /* Fallback color */
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 68px; /* Large text like in the design */
  text-align: center;
  font-weight: 900; /* Very bold */

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: -10px; /* Adjust spacing */
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 48px; /* Large text */
  text-align: center;
  max-width: 600px;
  font-weight: 700;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;