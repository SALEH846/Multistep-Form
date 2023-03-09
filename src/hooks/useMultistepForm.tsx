import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
	const [currentStepIndex, setCurrentStepIndex] = useState(0);

	// function to go to the next step in the form
	function next() {
		setCurrentStepIndex((index) => {
			if (index >= steps.length - 1) return index;
			return index + 1;
		});
	}

	// function to go to the previous step in the form
	function previous() {
		setCurrentStepIndex((index) => {
			if (index <= 0) return 0;
			return index - 1;
		});
	}

	// function to go to the artirary step in the form
	function goTo(index: number) {
		setCurrentStepIndex(index);
	}

	return {
		currentStepIndex,
		steps,
		step: steps[currentStepIndex],
		goTo,
		next,
		previous,
		isFirstStep: currentStepIndex === 0,
		isLastStep: currentStepIndex === steps.length - 1,
	};
}
