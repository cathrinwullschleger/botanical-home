import styled from "styled-components";

export const CardContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  padding: 0 50px; /* mobil 16px Seitenabstand */
  margin: 40px auto;
  max-width: 1200px;
  list-style: none;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, minmax(320px, 1fr));
    padding: 0 40px; /* größerer Abstand Tablet */
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(350px, 1fr));
    padding: 0 60px; /* noch mehr Abstand Desktop */
  }
`;

export const PlantCard = styled.li`
  background: #fff;
  padding: 16px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 12px;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 600px) {
    padding: 20px;
  }

  @media (min-width: 900px) {
    padding: 24px;
  }
`;

export const PlantImage = styled.img`
  width: 100%; /* Bild füllt Kartenbreite */
  max-width: 320px; /* max Breite auf Tablet */
  height: auto;
  margin-bottom: 12px;

  @media (min-width: 900px) {
    max-width: 400px; /* größere Bilder auf Desktop */
  }
`;
