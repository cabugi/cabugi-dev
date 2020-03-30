#include <bits/stdc++.h>

using namespace std;
const int maxn = 1e5 + 10;
pair<pair<int, int>, int> v[maxn];

int main() {
	int n;
	cin >> n;
	for (int i = 1; i <= n; i++)
		cin >> v[i].first.first >> v[i].first.second, v[i].second = i;

	sort(v+1, v+n+1);
	for (int i = 1; i <= n; i++)
		cout << v[i].second << " \n"[i==n];

	for (int i = 1; i <= n; i++)
		swap(v[i].first.first, v[i].first.second);
	sort(v+1, v+n+1);

	for (int i = 1; i <= n; i++)
		cout << v[i].second << " \n"[i==n];
	return 0;
}
