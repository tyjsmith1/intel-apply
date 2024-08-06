import { columns } from './columns'
import { DataTable } from './dataTable'

async function getData() {
    return [
        {
            id: "1",
            dateApplied: '2024-08-01',
            title: 'Software Developer II',
            company: 'Dunder Mifflin',
            salary: 100000,
            url: 'dundermifflin.com/careers',
            stage: 'applied',
            status: 'open',
            contacts: [],
            dateUpdated: '2024-08-01'
        },
        {
            id: "2",
            dateApplied: '2024-07-15',
            title: 'Frontend Developer',
            company: 'Initech',
            salary: 90000,
            url: 'initech.com/jobs',
            stage: 'phone-screen',
            status: 'open',
            contacts: [],
            dateUpdated: '2024-07-20'
        },
        {
            id: "3",
            dateApplied: '2024-06-10',
            title: 'Backend Developer',
            company: 'Hooli',
            salary: 110000,
            url: 'hooli.com/careers',
            stage: 'technical-challenge',
            status: 'open',
            contacts: [],
            dateUpdated: '2024-06-15'
        },
        {
            id: "4",
            dateApplied: '2024-05-05',
            title: 'Full Stack Developer',
            company: 'Pied Piper',
            salary: 120000,
            url: 'piedpiper.com/jobs',
            stage: 'offer-negotiation',
            status: 'open',
            contacts: [],
            dateUpdated: '2024-05-10'
        },
        {
            id: "5",
            dateApplied: '2024-04-01',
            title: 'DevOps Engineer',
            company: 'Aperture Science',
            salary: 95000,
            url: 'aperturescience.com/careers',
            stage: 'applied',
            status: 'open',
            contacts: [],
            dateUpdated: '2024-04-05'
        },
        {
            id: "6",
            dateApplied: '2024-03-20',
            title: 'Data Scientist',
            company: 'Umbrella Corporation',
            salary: 105000,
            url: 'umbrella.com/jobs',
            stage: 'phone-screen',
            status: 'open',
            contacts: [],
            dateUpdated: '2024-03-25'
        },
        {
            id: "7",
            dateApplied: '2024-02-15',
            title: 'Machine Learning Engineer',
            company: 'Cyberdyne Systems',
            salary: 115000,
            url: 'cyberdyne.com/careers',
            stage: 'technical-challenge',
            status: 'open',
            contacts: [],
            dateUpdated: '2024-02-20'
        },
        {
            id: "8",
            dateApplied: '2024-01-10',
            title: 'AI Researcher',
            company: 'Tyrell Corporation',
            salary: 130000,
            url: 'tyrell.com/jobs',
            stage: 'offer-negotiation',
            status: 'open',
            contacts: [],
            dateUpdated: '2024-01-15'
        },
        {
            id: "9",
            dateApplied: '2023-12-05',
            title: 'Cloud Engineer',
            company: 'Wayne Enterprises',
            salary: 95000,
            url: 'wayneenterprises.com/careers',
            stage: 'applied',
            status: 'open',
            contacts: [],
            dateUpdated: '2023-12-10'
        },
        {
            id: "10",
            dateApplied: '2023-11-01',
            title: 'Security Engineer',
            company: 'Stark Industries',
            salary: 125000,
            url: 'starkindustries.com/jobs',
            stage: 'phone-screen',
            status: 'open',
            contacts: [],
            dateUpdated: '2023-11-05'
        },
        {
            id: "11",
            dateApplied: '2023-10-20',
            title: 'Network Engineer',
            company: 'Oscorp',
            salary: 100000,
            url: 'oscorp.com/careers',
            stage: 'technical-challenge',
            status: 'open',
            contacts: [],
            dateUpdated: '2023-10-25'
        },
        {
            id: "12",
            dateApplied: '2023-09-15',
            title: 'Systems Engineer',
            company: 'LexCorp',
            salary: 110000,
            url: 'lexcorp.com/jobs',
            stage: 'offer-negotiation',
            status: 'open',
            contacts: [],
            dateUpdated: '2023-09-20'
        },
        {
            id: "13",
            dateApplied: '2023-08-10',
            title: 'Database Administrator',
            company: 'Weyland-Yutani',
            salary: 95000,
            url: 'weyland-yutani.com/careers',
            stage: 'applied',
            status: 'open',
            contacts: [],
            dateUpdated: '2023-08-15'
        },
        {
            id: "14",
            dateApplied: '2023-07-05',
            title: 'IT Support Specialist',
            company: 'Cyberdyne Systems',
            salary: 70000,
            url: 'cyberdyne.com/jobs',
            stage: 'phone-screen',
            status: 'open',
            contacts: [],
            dateUpdated: '2023-07-10'
        },
        {
            id: "15",
            dateApplied: '2023-06-01',
            title: 'Software Architect',
            company: 'Initech',
            salary: 140000,
            url: 'initech.com/jobs',
            stage: 'technical-challenge',
            status: 'open',
            contacts: [],
            dateUpdated: '2023-06-05'
        },
        {
            id: "16",
            dateApplied: '2023-05-20',
            title: 'Product Manager',
            company: 'Hooli',
            salary: 130000,
            url: 'hooli.com/careers',
            stage: 'offer-negotiation',
            status: 'open',
            contacts: [],
            dateUpdated: '2023-05-25'
        },
        {
            id: "17",
            dateApplied: '2023-04-15',
            title: 'QA Engineer',
            company: 'Pied Piper',
            salary: 90000,
            url: 'piedpiper.com/jobs',
            stage: 'applied',
            status: 'open',
            contacts: [],
            dateUpdated: '2023-04-20'
        },
        {
            id: "18",
            dateApplied: '2023-03-10',
            title: 'Business Analyst',
            company: 'Aperture Science',
            salary: 85000,
            url: 'aperturescience.com/careers',
            stage: 'phone-screen',
            status: 'open',
            contacts: [],
            dateUpdated: '2023-03-15'
        },
        {
            id: "19",
            dateApplied: '2023-02-05',
            title: 'UX Designer',
            company: 'Umbrella Corporation',
            salary: 95000,
            url: 'umbrella.com/jobs',
            stage: 'technical-challenge',
            status: 'open',
            contacts: [],
            dateUpdated: '2023-02-10'
        },
        {
            id: "20",
            dateApplied: '2023-01-01',
            title: 'UI Designer',
            company: 'Tyrell Corporation',
            salary: 90000,
            url: 'tyrell.com/jobs',
            stage: 'offer-negotiation',
            status: 'open',
            contacts: [],
            dateUpdated: '2023-01-05'
        }
    ]
}

export default async function TableComplete() {
    const data = await getData()

    return (
        <div className='container mx-auto py-10'>
            <DataTable columns={columns} data={data} />
        </div>
    )
}