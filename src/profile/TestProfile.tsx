import React from 'react';
import { 
  Container, 
  Grid, 
  Card, 
  Avatar, 
  Text, 
  Group, 
  Badge, 
  Stack, 
  Divider, 
  ThemeIcon, 
  Button, 
  Anchor 
} from '@mantine/core';
import { 
  IconBrandGithub, 
  IconMail, 
  IconMapPin, 
  IconBriefcase,  
  IconExternalLink 
} from '@tabler/icons'; // Mantine에서 주로 사용하는 아이콘 라이브러리

export const  ProfilePage = () => {
  // 개발 스택 데이터
  const skills = [
    { name: 'Go', color: 'blue' },
    { name: 'Java', color: 'red' },
    { name: 'React', color: 'cyan' },
    { name: 'Storybook', color: 'pink' },
    { name: 'Mantine', color: 'teal' }
  ];

  return (
    <Container size="md" py="xl">
      <Grid gutter="md">
        
        {/* 왼쪽: 프로필 요약 카드 (3열 차지) */}
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Stack align="center" gap="xs">
              <Avatar 
                size="xl" 
                radius="xl" 
                color="blue"
              >
                JD
              </Avatar>
              
              <Text fw={700} size="lg" mt="sm">홍길동 (John Doe)</Text>
              <Text size="sm" c="dimmed" >
                Full-Stack Engineer
              </Text>
              
              <Group gap="xs" mt="xs">
                <Badge color="blue" variant="light">프리랜서</Badge>
                <Badge color="gray" variant="light">Tokyo, Japan</Badge>
              </Group>
            </Stack>

            <Divider my="md" />

            {/* 인포메이션 섹션 */}
            <Stack gap="xs">
              <Group gap="sm">
                <ThemeIcon variant="light" color="gray" size="sm">
                  <IconBriefcase size={14} />
                </ThemeIcon>
                <Text size="sm">경력 12년차 개발자</Text>
              </Group>
              
              <Group gap="sm">
                <ThemeIcon variant="light" color="gray" size="sm">
                  <IconMapPin size={14} />
                </ThemeIcon>
                <Text size="sm">일본 도쿄 (비자 보유)</Text>
              </Group>

              <Group gap="sm">
                <ThemeIcon variant="light" color="gray" size="sm">
                  <IconMail size={14} />
                </ThemeIcon>
                <Anchor href="mailto:example@email.com" size="sm" c="dimmed">
                  example@email.com
                </Anchor>
              </Group>

              <Group gap="sm">
                <ThemeIcon variant="light" color="gray" size="sm">
                  <IconBrandGithub size={14} />
                </ThemeIcon>
                <Anchor href="https://github.com" target="_blank" size="sm" c="dimmed">
                  github.com/username
                </Anchor>
              </Group>
            </Stack>

            <Button fullWidth mt="xl" variant="light" color="blue">
              연락하기 (Contact)
            </Button>
          </Card>
        </Grid.Col>

        {/* 오른쪽: 자기소개 및 프로젝트 목록 (8열 차지) */}
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Stack gap="md">
            
            {/* 1. About Me */}
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Text fw={700} size="xl" mb="xs">About Me</Text>
              <Text size="sm" style={{ lineHeight: 1.6 }}>
                안정적이고 확장 가능한 백엔드 시스템 구축과 직관적인 프론트엔드 UI를 개발하는 12년차 엔지니어입니다. 
                최근에는 Go, Java를 활용한 모니터링 서비스와 React를 기반으로 한 컴포넌트 주도 개발(Storybook)에 집중하고 있습니다.
              </Text>
              
              <Text fw={600} size="md" mt="md" mb="xs">Technical Stack</Text>
              <Group gap="xs">
                {skills.map((skill) => (
                  <Badge key={skill.name} color={skill.color} variant="filled">
                    {skill.name}
                  </Badge>
                ))}
              </Group>
            </Card>

            {/* 2. 대표 프로젝트 (Toy Project) */}
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Group justify="space-between" mb="xs">
                <Text fw={700} size="xl">Featured Project</Text>
                <Badge color="green" variant="outline">In Progress</Badge>
              </Group>
              
              <Text fw={600} size="md">실시간 시스템 모니터링 서비스</Text>
              <Text size="xs" c="dimmed" mb="sm">Go • Java • React</Text>
              
              <Text size="sm" style={{ lineHeight: 1.6 }} mb="md">
                서버 인프라 상태를 실시간으로 수집하고 대시보드에 시각화하는 모니터링 툴입니다. 
                Go를 사용하여 고성능 데이터 수집 엔진을 구축하고, React와 정밀한 UI 컴포넌트 설계를 통해 직관적인 차트 화면을 구현했습니다.
              </Text>

              <Group gap="sm">
                <Button 
                  variant="default" 
                  size="xs" 
                  leftSection={<IconBrandGithub size={14} />}
                  component="a"
                  href="https://github.com"
                  target="_blank"
                >
                  Code
                </Button>
                <Button 
                  variant="light" 
                  color="blue" 
                  size="xs" 
                  leftSection={<IconExternalLink size={14} />}
                  component="a"
                  href="https://example.com"
                  target="_blank"
                >
                  Demo
                </Button>
              </Group>
            </Card>

          </Stack>
        </Grid.Col>
        
      </Grid>
    </Container>
  );
}

export default ProfilePage;