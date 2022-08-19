import requests

searching = '합정 스타벅스'
url = 'https://dapi.kakao.com/v2/local/search/keyword.json?query={}'.format(searching)
headers = {
    "Authorization": "KakaoAK 625eb3d4cd28e2a2560c1e86b5fc221c"
}
places = requests.get(url, headers = headers).json()['documents']

print(places)