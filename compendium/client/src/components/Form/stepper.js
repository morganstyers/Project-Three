import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import SelectACollection from '../Inputs/Dropdown';
import CollectionInfo from '../Inputs/Info';
import AddInfo from '../Inputs/AddInfo';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));

function getSteps() {
    return ["Let's Get Started", 'Choose Collection Type', 'Info', 'Additional Notes', 'Create'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return `Welcome! Let's get your collection logged. In the following steps we will 
      find out all about your passion and get you ready to organize your inventory, 
      consolidate your info, and display it to the world (or your iguana, no judgement).
      Don't worry, we've made this as user friendly as possible- you've done all the work, let us do 
      the boring stuff. When you're ready to get started, click 'next!'`;
        case 1:
            return <Card> <p>What kind of super cool stuff do you collect? Right now we only have set categories, but soon we hope to let you customize your own!</p>
                            <SelectACollection/></Card>
                                                    
    case 2:
    return <Card><p>You selected {}, what a neat thing to collect! Lets find out some more about your treasures. Grab your first specimen and party on: '
</p><CollectionInfo/></Card>
                  case 3:
                    return <Card> <AddInfo/></Card>
                    case 4:
                        return 'Yay! You just added your first thing to your collection! We should save it so hard.'
                        
             
    default:
return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };


    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <Typography>{getStepContent(index)}</Typography>
                            <div className={classes.actionsContainer}>
                                <div>

                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}>
                                        Back</Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset} className={classes.button}>
                        Reset
          </Button>
                </Paper>
            )}
        </div>
    );
}
