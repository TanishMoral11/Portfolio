import React from 'react'
import styled from 'styled-components'

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + '99'};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Span = styled.span`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    border: 0.1px solid #306EE8;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;

    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }

    &:hover ${Span} {
        overflow: visible;
        -webkit-line-clamp: unset;
    }

    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
`

const Image = styled.img`
    height: 50px;
    background-color: #fff;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`

const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + '99'};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + '99'};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + '80'};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -10px;
`

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const Skill = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + '99'};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const DocLinks = styled.div`
    margin-top: 12px;
`

const DocLink = styled.a`
    margin-right: 16px;
    color: #306EE8;
    font-weight: 600;
    text-decoration: underline;
    cursor: pointer;
    font-size: 14px;

    &:hover {
        opacity: 0.8;
    }
`

const ExperienceCard = ({ experience }) => {
    return (
        <Card>
            <Top>
                <Image src={experience.img} alt={`${experience.company} logo`} />
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Date>{experience.date}</Date>
                </Body>
            </Top>

            <Description>
                {experience?.desc && (
                    <Span>
                        {experience.desc.map((line, i) => (
                            <div key={i} style={{ marginBottom: '6px' }}>
                                {line}
                            </div>
                        ))}
                    </Span>
                )}

                {experience?.skills && (
                    <>
                        <br />
                        <Skills>
                            <b>Skills:</b>
                            <ItemWrapper>
                                {experience.skills.map((skill, index) => (
                                    <Skill key={index}>• {skill}</Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                )}
            </Description>

            {experience.doc && Array.isArray(experience.doc) && (
                <DocLinks>
                    {experience.doc.map(({ label, url }) => (
                        <DocLink
                            key={label}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {label}
                        </DocLink>
                    ))}
                </DocLinks>
            )}
        </Card>
    )
}

export default ExperienceCard
