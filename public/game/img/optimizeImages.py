import os
from PIL import Image

path = os.walk('./')
pathTowerCards = './towerCards/'
pathEnemyCards = './enemyCards/'

listTowerCards = os.listdir(pathTowerCards)
listEnemyCards = os.listdir(pathEnemyCards)

fileImages = open('output/images.js', 'w')
fileImages.write('[\n')

for root, dir, files in path:
    for file in files:
        if file.endswith('.png'):
            name = file.replace(' ', '_')
            path = root
            if (path != './'):
                path = path+'/'
            os.rename(path+file, path+name)
            image = Image.open(path+name)
            image.save(path+name, optimize=True, quality=75)
            path = path.replace('./', '')
            prefix = root.replace('./', '')
            if (path != ''):
                prefix = prefix+'_'
            fileImages.write(
                '   {\n' +
                '       link: \'img/'+path+name+'\', \n' +
                '       name: \''+prefix+name.replace('.png', '')+'\'\n' +
                '   },\n')

fileImages.write(']')
fileImages.close()

cards = open('output/cards.js', 'w')
cards.write('const userCardsData=[\n')
for x in listTowerCards:
    if x.endswith('.png'):
        type = x.split('_')
        cards.write('   {\n' +
                    '       supply:'+'3'+',\n' +
                    '       img: \'towerCards_'+x.replace('.png', '')+'\',\n' +
                    '       creationAnimation: \'towers_'+x.replace('.png', '')+'\',\n' +
                    '       animation:\'buildingShooting\',\n' +
                    '       frames:{\n' +
                    '           create: 1,\n' +
                    '           shooting: 1\n' +
                    '       },\n' +
                    '       name: \''+type[0]+'_'+type[1]+'\',\n' +
                    '       isShooting: true,\n' +
                    '       attack: 0,\n' +
                    '       penetration: 0,\n' +
                    '       breaker: 0,\n' +
                    '       attackSpeed: 0,\n' +
                    '       deffence: 0,\n' +
                    '       shield: 0,\n' +
                    '       range: 0,\n' +
                    '       offset:{\n' +
                    '           x:0,\n' +
                    '           y:0\n' +
                    '       }\n' +
                    '   },\n')
cards.write('\n]\n')
cards.write('const enemyCardsData=[\n')
for x in listEnemyCards:
    if x.endswith('.png'):
        type = x.split('_')
        cards.write('   {\n' +
                    '       img: \'enemyCards_'+x.replace('.png', '')+'\',\n' +
                    '       creationAnimation: \'enemy_'+x.replace('.png', '')+'\',\n' +
                    '       animation:\'buildingShooting\',\n' +
                    '       frames:{\n' +
                    '           create: null,\n' +
                    '           shooting: 1\n' +
                    '       },\n' +
                    '       name: \''+type[0]+'_'+type[1]+'\',\n' +
                    '       isShooting: true,\n' +
                    '       speed: 0,\n' +
                    '       attack: 0,\n' +
                    '       range: 0,\n' +
                    '       shield: 0,\n' +
                    '       armor: 0,\n' +
                    '       deffence: 0,\n' +
                    '       attackSpeed: 0,\n' +
                    '       jump: false,\n' +
                    '       invisible: false,\n' +
                    '       spawn: [],\n' +
                    '       spawnCount: 0,\n' +
                    '       offset:{\n' +
                    '           x:0,\n' +
                    '           y:0\n' +
                    '       }\n' +
                    '   },\n')
cards.write('\n]')
cards.close()
