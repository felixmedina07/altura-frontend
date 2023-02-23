import os

pathTowers = './towers/'
pathTowerBorder = './towerBorder/'
pathTowerCards = './towerCards/'
pathEnemy = './enemy/'
pathEnemyBorder = './enemyBorder/'
pathEnemyCards = './enemyCards/'
pathInteface = './'

listTowerCards = os.listdir(pathTowerCards)
listTowers = os.listdir(pathTowers)
listBorderTower = os.listdir(pathTowerBorder)

listEnemyCards = os.listdir(pathEnemyCards)
listEnemy = os.listdir(pathEnemy)
listEnemyBorder = os.listdir(pathEnemyBorder)

listInterface = os.listdir(pathInteface)

file = open('output/images.js', 'w')
file.write('[\n')
for x in listInterface:
    if x.endswith('.png'):
        name = x.replace(' ', '_')
        os.rename(pathInteface+x, pathInteface+name)
        file.write(
            '   {\n' +
            '       link: \'img/'+name+'\', \n' +
            '       name: \''+name.replace('.png', '')+'\'\n' +
            '   },\n')

for x in listEnemyCards:
    if x.endswith('.png'):
        name = x.replace(' ', '_')
        os.rename(pathEnemyCards+x, pathEnemyCards+name)
        file.write(
            '   {\n' +
            '       link: \'img/enemyCards/'+name+'\', \n' +
            '       name: \''+'CARD_'+name.replace('.png', '')+'\'\n' +
            '   },\n')

for x in listEnemy:
    if x.endswith('.png'):
        name = x.replace(' ', '_')
        os.rename(pathEnemy+x, pathEnemy+name)
        file.write(
            '   {\n' +
            '       link: \'img/enemy/'+name+'\', \n' +
            '       name: \''+'ENEMY_'+name.replace('.png', '')+'\'\n' +
            '   },\n')
for x in listEnemyBorder:
    if (x.endswith('.png')):
        name = x.replace(' ', '_')
        os.rename(pathEnemyBorder+x, pathEnemyBorder+name)
        file.write(
            '   {\n' +
            '       link: \'img/enemyBorder/'+name+'\', \n' +
            '       name: \''+name.replace('.png', '')+'\'\n' +
            '   },\n')
for x in listTowerCards:
    if x.endswith('.png'):
        name = x.replace(' ', '_')
        os.rename(pathTowerCards+x, pathTowerCards+name)
        file.write(
            '   {\n' +
            '       link: \'img/towerCards/'+name+'\', \n' +
            '       name: \''+'CARD_'+name.replace('.png', '')+'\'\n' +
            '   },\n')

for x in listTowers:
    if x.endswith('.png'):
        name = x.replace(' ', '_')
        os.rename(pathTowers+x, pathTowers+name)
        file.write(
            '   {\n' +
            '       link: \'img/towers/'+name+'\', \n' +
            '       name: \''+'TOWER_'+name.replace('.png', '')+'\'\n' +
            '   },\n')
for x in listBorderTower:
    if (x.endswith('.png')):
        name = x.replace(' ', '_')
        os.rename(pathTowerBorder+x, pathTowerBorder+name)
        file.write(
            '   {\n' +
            '       link: \'img/towerBorder/'+name+'\', \n' +
            '       name: \''+name.replace('.png', '')+'\'\n' +
            '   },\n')
file.write(']')
file.close()

cards = open('output/cards.js', 'w')
cards.write('[\n')
for x in listTowerCards:
    if x.endswith('.png'):
        type = x.split('_')
        cards.write('   {\n' +
                    '       supply:'+'3'+',\n' +
                    '       img: \'CARD_'+x.replace('.png', '')+'\',\n' +
                    '       creationAnimation: \'TOWER_'+x.replace('.png', '')+'\',\n' +
                    '       animation:\'buildingShooting\',\n' +
                    '       frames:{\n' +
                    '           create: 1,\n' +
                    '           shooting: 1\n' +
                    '       },\n' +
                    '       name: \''+type[0]+'_'+type[1]+'\',\n' +
                    '       isShooting: true,\n' +
                    '       attack: 0,\n' +
                    '       deffence: 0,\n' +
                    '       attackSpeed: 0,\n' +
                    '       offset:{\n' +
                    '           x:0,\n' +
                    '           y:0\n' +
                    '       }\n' +
                    '   },\n')
cards.write('\n]')
cards.close()
