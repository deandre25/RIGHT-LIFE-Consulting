import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import backgroundImage from './1642113282aboutus.jpg'; 

const AboutUsPage = () => {
  return (
    <Container maxWidth="lg" style={{padding: '20px 0'}}>
      <Container maxWidth="xl" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', padding: '50px 0', textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom style={{ color: '#6BAC8E' }}>
          Veränderung scheitert oft. Wir nicht.
        </Typography>
        <Typography variant="body1" style={{ color: '#6BAC8E' }}>
          Wenn Transformationsführer die menschlichen Faktoren nicht berücksichtigen, scheitert Veränderung in der Regel. Viele Unternehmen haben erlebt, dass sie immer wieder in Veränderungen investieren, ohne ihre Vision zum Leben zu erwecken. Bei Daggerwing konzentrieren wir uns darauf, Veränderungen von Anfang an richtig zu machen, indem wir uns auf Menschen konzentrieren.
        </Typography>
      </Container>
      
      <section style={{ padding: '50px 0' }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h5" gutterBottom style={{ color: '#333', fontWeight: 'bold' }}>
                WIR BRECHEN DEN ZYKLUS DES SCHEITERNS IM CHANGE MANAGEMENT
              </Typography>
              <Typography variant="body1" style={{ color: '#666' }}>
                Führungskräfte investieren heute immer mehr in Change Management - aber einige sind bereit, eine hohe Misserfolgsquote zu akzeptieren. Unser Zweck und all unsere bewährten Methoden sind darauf ausgerichtet, Führungskräften zu helfen, Misserfolge zu vermeiden.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h5" gutterBottom style={{ color: '#333', fontWeight: 'bold' }}>
                WIR SIND DIE GEHEIME WAFFE DER C-SUITE
              </Typography>
              <Typography variant="body1" style={{ color: '#666' }}>
                Führungskräfte der C-Suite wollen nicht nur Veränderungen - sie haben große Transformationsambitionen und wollen, dass sie bestehen bleiben. Unsere zuverlässige Fähigkeit, dies zu erreichen, ist der Grund, warum mehr als die Hälfte unserer Stammkunden seit drei oder mehr Jahren zu Daggerwing zurückkehrt.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h5" gutterBottom style={{ color: '#333', fontWeight: 'bold' }}>
                WIR HABEN BREITES BRANCHENKNOW-HOW
              </Typography>
              <Typography variant="body1" style={{ color: '#666' }}>
                Die menschlichen Faktoren, die den Erfolg oder Misserfolg von Veränderungen bestimmen, betreffen alle Branchen - und auch das Know-how von Daggerwing. Wir wissen, dass Branchenerfahrung ein Vorteil ist, daher bieten wir Erfahrung in den Bereichen Konsumgüter, Gesundheitswesen und Pharma, Automobilindustrie, QSR, Lebensmittel und Getränke, Technologie, Luft- und Raumfahrt, Finanzen, Mode und Luxus, Einzelhandel und Fertigung.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section style={{ padding: '50px 0' }}>
        <Container>
          <Typography variant="h4" gutterBottom style={{ color: '#333', textAlign: 'center' }}>
            Unser Ansatz
          </Typography>
          <Typography variant="body1" style={{ color: '#666' }}>
            Bei Daggerwing glauben wir, dass erfolgreiche Veränderungen mit Menschen beginnen und mit ihnen enden. Deshalb ist unser Ansatz tief in Empathie und Verständnis für die menschlichen Dynamiken jeder organisatorischen Transformation verwurzelt. Wir kombinieren bahnbrechende Forschungsergebnisse mit praktischen Erkenntnissen aus jahrzehntelanger Erfahrung, um maßgeschneiderte Lösungen zu liefern, die auf allen Ebenen Ihrer Organisation auf Zustimmung stoßen.
          </Typography>
        </Container>
      </section>

      <section style={{ backgroundColor: '#f0f0f0', padding: '50px 0', textAlign: 'center' }}>
        <Container>
          <Typography variant="h4" gutterBottom style={{ color: '#333' }}>
            Unsere Werte
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Typography variant="h5" gutterBottom style={{ color: '#6BAC8E', fontWeight: 'bold' }}>
                Empathie
              </Typography>
              <Typography variant="body1" style={{ color: '#666' }}>
                Wir setzen uns leidenschaftlich für die Bedürfnisse unserer Kunden und Mitarbeiter ein und bemühen uns, ihr Vertrauen und ihre Loyalität zu gewinnen.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h5" gutterBottom style={{ color: '#6BAC8E', fontWeight: 'bold' }}>
                Innovation
              </Typography>
              <Typography variant="body1" style={{ color: '#666' }}>
                Wir sind bestrebt, kontinuierlich neue Ideen zu entwickeln und innovative Lösungen zu finden, um den Erfolg unserer Kunden zu fördern.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h5" gutterBottom style={{ color: '#6BAC8E', fontWeight: 'bold' }}>
                Zusammenarbeit
              </Typography>
              <Typography variant="body1" style={{ color: '#666' }}>
                Wir glauben an die Kraft der Zusammenarbeit und arbeiten eng mit unseren Kunden zusammen, um gemeinsam Ziele zu erreichen.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>
    </Container>
  );
};

export default AboutUsPage;
