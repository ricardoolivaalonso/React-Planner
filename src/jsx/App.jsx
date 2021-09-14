import { HeaderSection } from './01-sections/HeaderSection'
import DaysSection from './01-sections/DaysSection'
import TasksSection from './01-sections/TasksSection'
import { FormSection } from './01-sections/FormSection'
import { Provider } from 'react-redux'
import store from '../redux/store.js'

const App = () => {
	return(
		<Provider store={store} >
			<div className="planner">
				<HeaderSection></HeaderSection>
				<DaysSection></DaysSection>
				<TasksSection></TasksSection>
				<FormSection></FormSection>
			</div>
		</Provider>
	)
}

export default App;
