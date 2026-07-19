import { Card, Text, CardSection } from "@mantine/core"
import { type Token } from 'markdown-it';

interface TokenListProps {
  tokens: Token[] | undefined; 
}

const getMarker = (tagName:string) => {
    return "<!-- " + tagName + " -->"
}

const findTagValue = ({tokens}:TokenListProps, tagName:string) => {
    const marker = getMarker(tagName)
    const nameLine:Token = tokens?.find((value) => {
        return value.content.match(marker)
    })
    if(!nameLine)
        return ""
    const line:string = nameLine.content
    const splitted = line.split(marker)
    if(splitted.length < 2)
        return ""
    return splitted[1]
}

 const  NameYearCard = (tokens:TokenListProps) => {
    const name:string = findTagValue(tokens, 'Name')
    const birth:string = findTagValue(tokens, "Birth")
    return (
        <Card>
           <Text size="md">
            姓名
           </Text>
           <Text size="sm">
             {name}
           </Text>
           <Text size="md">
            生年月日
           </Text>
           <Text size="sm">
            {birth}
           </Text>
        </Card>
    )
}

export default NameYearCard