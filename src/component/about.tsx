import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import About1 from '../assets/about-us.gif'
import About2 from '../assets/about2.gif'

export default function About() {
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <div className="about">
      <h3 style={{ marginBottom: '2rem', textAlign: 'center' }}>About Lorem</h3>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        className="panel"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              width: '33%',
              flexShrink: 0,
              color: '#F0A04B',
              fontWeight: 'bold',
            }}
          >
            WHAT
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            What is Lorem Ipsum?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>Lorem Ipsum</b> is simply dummy text of the printing and
            typesetting industry.
            <b>Lorem Ipsum</b> has been the industry`s standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing <b>Lorem Ipsum</b>{' '}
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of <b>Lorem Ipsum</b>.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        className="panel"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            sx={{
              width: '33%',
              flexShrink: 0,
              color: '#A084DC',
              fontWeight: 'bold',
            }}
          >
            WHY
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Why do we use it?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using <b>Lorem Ipsum</b> is that it has a more-or-less normal
            distribution of letters, as opposed to using `Content here, content
            here`, making it look like readable English.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
        className="panel"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography
            sx={{
              width: '33%',
              flexShrink: 0,
              color: '#3C84AB',
              fontWeight: 'bold',
            }}
          >
            WHERE
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Where does it come from?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Contrary to popular belief, <b>Lorem Ipsum</b> is not simply random
            text. It has roots in a piece of classical Latin literature from 45
            BC, making it over 2000 years old. Richard McClintock, a Latin
            professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin words, consectetur, from a <b>Lorem Ipsum</b>{' '}
            passage, and going through the cites of the word in classical
            literature, discovered the undoubtable source. <b>Lorem Ipsum </b>
            comes from sections 1.10.32 and 1.10.33 of `de Finibus Bonorum et
            Malorum` (The Extremes of Good and Evil) by Cicero, written in 45
            BC.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
        className="panel"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              width: '33%',
              flexShrink: 0,
              color: '#A7727D',
              fontWeight: 'bold',
            }}
          >
            WHERE
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Where can I get some?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            There are many variations of passages of <b>Lorem Ipsum</b>{' '}
            available, but the majority have suffered alteration in some form,
            by injected humour, or randomised words which don`t look even
            slightly believable.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <img src={About1} alt="about-gif" className="about-gif-1" />
      <img src={About2} alt="about-gif" className="about-gif-2" />
    </div>
  )
}
