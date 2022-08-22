import {
  ActionIcon,
  Box,
  Group,
  Text,
  Title,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core'
import { PlayerPlay, Settings, PlaylistAdd, Plus } from 'tabler-icons-react'

export default function Home() {
  const theme = useMantineTheme()

  return (
    <Group direction='column' mt='-20px'>
      <Group
        style={{
          backgroundColor: theme.colors.gray[0],
          width: '500px',
          height: '100vh',
        }}
        mx='auto'
        direction='column'
      >
        <Group position='apart' style={{ width: '100%' }}>
          <ActionIcon color='gray' size='xl' m='sm' variant='transparent'>
            <Settings />
          </ActionIcon>
          <ActionIcon color='gray' size='xl' m='sm' variant='transparent'>
            <PlaylistAdd />
          </ActionIcon>
        </Group>
        <Group
          spacing='none'
          mt='sm'
          position='center'
          mx='auto'
          direction='column'
          height='175px'
        >
          <Title order={1} style={{ fontWeight: '900', fontSize: '4rem' }}>
            25:00
          </Title>
          <Text>Record Mantine Tutorial</Text>
        </Group>
        <Group
          mt='sm'
          position='center'
          mx='auto'
          direction='row'
          height='200px'
          mb='md'
        >
          <ActionIcon color='dark' size='xl' variant='transparent'>
            -5
          </ActionIcon>
          <ActionIcon radius='xl' color='dark' size='xl' variant='filled'>
            <PlayerPlay />
          </ActionIcon>
          <ActionIcon color='dark' size='xl' variant='transparent'>
            +5
          </ActionIcon>
        </Group>
        <Group
          mt='sm'
          mb='sm'
          position='center'
          mx='auto'
          direction='column'
          height='90px'
        >
          <UnstyledButton style={{ height: '100%', width: '260px' }}>
            <Group
              spacing='none'
              p='lg'
              direction='column'
              mt='sm'
              mx='auto'
              position='center'
              style={{
                backgroundColor: 'rgb(238,238,238)',
                border: '1px dashed rgb(189,189,189)',
              }}
            >
              <Box size='md' radius='xs'>
                <Plus style={{ color: 'gray' }} />
              </Box>
              <Text variant='light' size='xs' color='gray'>Add Task</Text>
            </Group>
          </UnstyledButton>
        </Group>
        <Group mx='auto' style={{width: '260px', justifyContent: 'space-between'}} position='right'>
          <Text size='xs'>Hide complete</Text>
          <Text size='xs'>Clear complete</Text>
          <Text size='xs'>Clear all</Text>
        </Group>
      </Group>
    </Group>
  )
}
