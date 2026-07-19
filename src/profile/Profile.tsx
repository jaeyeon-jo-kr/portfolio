import { useEffect, useState } from 'react'
import markdownit from 'markdown-it'
import { type Token } from 'markdown-it'
import NameYearCard from './ProfileCard'
import { Scroller } from '@mantine/core'

const readResume = async () => {
    const response = await fetch('/resume.md')
    if(!response.ok)
    {
        console.error('file read error.')
    }
    const text = await response.text()
    const markdownItObj = markdownit()
    const token = markdownItObj.parse(text, {})
    console.debug("tokens parsed by resume : ", token)
    return token
}
const Profile = () => {
    const [resumeTokens, setResumeTokens] = useState<Token[]>()
    useEffect(() =>  {  
        readResume().then((tokens) => {
            setResumeTokens(tokens)
        })
    }, [])
    return (<Scroller draggable>
        <NameYearCard tokens={resumeTokens}></NameYearCard>
        <NameYearCard tokens={resumeTokens}></NameYearCard>
        <NameYearCard tokens={resumeTokens}></NameYearCard>
    </Scroller>)
}

export default Profile;